"use client";
import { useEffect, useState, useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  doc, 
  getDoc, 
  updateDoc, 
 // deleteDoc,
  orderBy,
 // limit
} from "firebase/firestore";
import { auth, db } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  AcademicCapIcon, 
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
 // CheckCircleIcon,
  XMarkIcon,
  EyeIcon,
 // PencilIcon,
  TrashIcon,
  ClockIcon,
  StarIcon
} from "@heroicons/react/24/outline";

interface ProjectSubmission {
  id: string;
  userId: string;
  courseId: string;
  userName: string;
  userEmail: string;
  githubUrl: string;
  youtubeUrl: string;
  description: string;
  status: "pending" | "approved" | "rejected" | "needs_revision";
  score?: number;
  submittedAt: Date;
  reviewedAt?: Date;
  reviewComments?: string;
  reviewerId?: string;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  college?: string;
  course?: string;
  year?: string;
  createdAt: Date;
  totalCourses: number;
  totalProgress: number;
}

interface AdminStats {
  totalUsers: number;
  totalSubmissions: number;
  pendingReviews: number;
  certificatesIssued: number;
  totalCourses: number;
  activeUsers: number;
}

export default function AdminDashboard() {
  const [user, loading] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [adminStats, setAdminStats] = useState<AdminStats>({
    totalUsers: 0,
    totalSubmissions: 0,
    pendingReviews: 0,
    certificatesIssued: 0,
    totalCourses: 3,
    activeUsers: 0
  });
  const [submissions, setSubmissions] = useState<ProjectSubmission[]>([]);
  const [users, setUsers] = useState<UserData[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<ProjectSubmission | null>(null);
  const [reviewModal, setReviewModal] = useState(false);
  const [reviewScore, setReviewScore] = useState<number>(0);
  const [reviewComments, setReviewComments] = useState("");
  const router = useRouter();

  const checkAdminAccess = useCallback(async () => {
    if (!user) return;
    
    try {
      // Check if user is admin (you can implement this check based on your admin logic)
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();
      
      // For now, checking if email is admin email - implement your own logic
      const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS ? process.env.NEXT_PUBLIC_ADMIN_EMAILS.split(",") : ["ADMIN_EMAILS"];
      const isUserAdmin = adminEmails.includes(user.email || "") || userData?.role === "admin";
      
      if (isUserAdmin) {
        setIsAdmin(true);
        loadAdminData();
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Error checking admin access:", error);
      router.push("/");
    }
  }, [user, router]);

  useEffect(() => {
    if (user) {
      checkAdminAccess();
    }
  }, [user, checkAdminAccess]);

  const loadAdminData = async () => {
    setLoadingData(true);
    try {
      // Load users
      const usersQuery = query(collection(db, "users"), orderBy("createdAt", "desc"));
      const usersSnapshot = await getDocs(usersQuery);
      const usersData: UserData[] = [];
      
      usersSnapshot.forEach((doc) => {
        const userData = doc.data();
        usersData.push({
          id: doc.id,
          name: userData.name,
          email: userData.email,
          college: userData.college,
          course: userData.course,
          year: userData.year,
          createdAt: userData.createdAt.toDate(),
          totalCourses: 0, // Will be calculated
          totalProgress: 0 // Will be calculated
        });
      });

      // Load project submissions
      const submissionsQuery = query(
        collection(db, "projectSubmissions"), 
        orderBy("submittedAt", "desc")
      );
      const submissionsSnapshot = await getDocs(submissionsQuery);
      const submissionsData: ProjectSubmission[] = [];
      
      submissionsSnapshot.forEach((doc) => {
        const submissionData = doc.data();
        submissionsData.push({
          id: doc.id,
          ...submissionData,
          submittedAt: submissionData.submittedAt.toDate(),
          reviewedAt: submissionData.reviewedAt?.toDate()
        } as ProjectSubmission);
      });

      // Calculate stats
      const pendingReviews = submissionsData.filter(s => s.status === "pending").length;
      const certificatesIssued = submissionsData.filter(s => s.status === "approved" && s.score && s.score >= 60).length;
      const recentUsers = usersData.filter(u => {
        const daysDiff = (new Date().getTime() - u.createdAt.getTime()) / (1000 * 3600 * 24);
        return daysDiff <= 30;
      }).length;

      setUsers(usersData);
      setSubmissions(submissionsData);
      setAdminStats({
        totalUsers: usersData.length,
        totalSubmissions: submissionsData.length,
        pendingReviews,
        certificatesIssued,
        totalCourses: 3,
        activeUsers: recentUsers
      });

    } catch (error) {
      console.error("Error loading admin data:", error);
    } finally {
      setLoadingData(false);
    }
  };

  const handleReviewSubmission = async (action: "approve" | "reject") => {
    if (!selectedSubmission || !user) return;

    try {
      const submissionRef = doc(db, "projectSubmissions", selectedSubmission.id);
      
      await updateDoc(submissionRef, {
        status: action === "approve" ? "approved" : "rejected",
        score: action === "approve" ? reviewScore : 0,
        reviewComments,
        reviewedAt: new Date(),
        reviewerId: user.uid
      });

      // Update local state
      setSubmissions(prev => 
        prev.map(s => 
          s.id === selectedSubmission.id 
            ? { 
                ...s, 
                status: action === "approve" ? "approved" : "rejected",
                score: action === "approve" ? reviewScore : 0,
                reviewComments,
                reviewedAt: new Date(),
                reviewerId: user.uid
              }
            : s
        )
      );

      // If approved with passing score, update user's certificate status
      if (action === "approve" && reviewScore >= 60) {
        // Update course progress to mark certificate as earned
        const progressQuery = query(
          collection(db, "courseProgress"),
          where("userId", "==", selectedSubmission.userId),
          where("courseId", "==", selectedSubmission.courseId)
        );
        const progressSnapshot = await getDocs(progressQuery);
        
        if (!progressSnapshot.empty) {
          const progressDoc = progressSnapshot.docs[0];
          await updateDoc(progressDoc.ref, {
            certificateEarned: true,
            projectApproved: true,
            projectScore: reviewScore
          });
        }
      }

      setReviewModal(false);
      setSelectedSubmission(null);
      setReviewScore(0);
      setReviewComments("");
      
      // Refresh stats
      loadAdminData();

    } catch (error) {
      console.error("Error reviewing submission:", error);
    }
  };

  if (loading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="max-w-md mx-auto px-6 py-16 text-center bg-white rounded-2xl shadow-xl">
          <ExclamationTriangleIcon className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-6">You don&apos;t have permission to access the admin dashboard.</p>
          <Link 
            href="/" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your learning platform</p>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheckIcon className="w-8 h-8 text-green-600" />
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Administrator
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Users</p>
                <p className="text-3xl font-bold text-gray-900">{adminStats.totalUsers}</p>
              </div>
              <UserGroupIcon className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Submissions</p>
                <p className="text-3xl font-bold text-gray-900">{adminStats.totalSubmissions}</p>
              </div>
              <DocumentTextIcon className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pending Reviews</p>
                <p className="text-3xl font-bold text-orange-600">{adminStats.pendingReviews}</p>
              </div>
              <ClockIcon className="w-8 h-8 text-orange-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Certificates</p>
                <p className="text-3xl font-bold text-green-600">{adminStats.certificatesIssued}</p>
              </div>
              <AcademicCapIcon className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Courses</p>
                <p className="text-3xl font-bold text-gray-900">{adminStats.totalCourses}</p>
              </div>
              <ChartBarIcon className="w-8 h-8 text-indigo-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">New Users (30d)</p>
                <p className="text-3xl font-bold text-gray-900">{adminStats.activeUsers}</p>
              </div>
              <StarIcon className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {[
                { id: "overview", label: "Overview", icon: ChartBarIcon },
                { id: "submissions", label: "Project Reviews", icon: DocumentTextIcon },
                { id: "users", label: "User Management", icon: UserGroupIcon },
                { id: "settings", label: "Settings", icon: CogIcon }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                  {tab.id === "submissions" && adminStats.pendingReviews > 0 && (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                      {adminStats.pendingReviews}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Overview</h2>
                
                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Submissions</h3>
                    <div className="space-y-3">
                      {submissions.slice(0, 5).map((submission) => (
                        <div key={submission.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{submission.userName}</p>
                            <p className="text-sm text-gray-600">{submission.courseId}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            submission.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                            submission.status === "approved" ? "bg-green-100 text-green-800" :
                            "bg-red-100 text-red-800"
                          }`}>
                            {submission.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Users</h3>
                    <div className="space-y-3">
                      {users.slice(0, 5).map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{user.name}</p>
                            <p className="text-sm text-gray-600">{user.email}</p>
                          </div>
                          <span className="text-xs text-gray-500">
                            {user.createdAt.toLocaleDateString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Submissions Tab */}
            {activeTab === "submissions" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Submissions</h2>
                
                <div className="space-y-4">
                  {submissions.map((submission) => (
                    <div key={submission.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{submission.userName}</h3>
                          <p className="text-gray-600">{submission.userEmail}</p>
                          <p className="text-sm text-gray-500">Course: {submission.courseId}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            submission.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                            submission.status === "approved" ? "bg-green-100 text-green-800" :
                            submission.status === "rejected" ? "bg-red-100 text-red-800" :
                            "bg-blue-100 text-blue-800"
                          }`}>
                            {submission.status}
                          </span>
                          {submission.score && (
                            <p className="text-sm text-gray-600 mt-1">Score: {submission.score}%</p>
                          )}
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-700 text-sm mb-2">{submission.description}</p>
                        <div className="flex space-x-4">
                          <a 
                            href={submission.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm"
                          >
                            GitHub Repository
                          </a>
                          <a 
                            href={submission.youtubeUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-red-600 hover:underline text-sm"
                          >
                            Demo Video
                          </a>
                        </div>
                      </div>

                      {submission.reviewComments && (
                        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-700">{submission.reviewComments}</p>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Submitted: {submission.submittedAt.toLocaleDateString()}
                        </span>
                        {submission.status === "pending" && (
                          <button
                            onClick={() => {
                              setSelectedSubmission(submission);
                              setReviewModal(true);
                            }}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                          >
                            Review Project
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === "users" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">User Management</h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{user.college || "N/A"}</div>
                            <div className="text-sm text-gray-500">{user.course} - {user.year}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.createdAt.toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                              <EyeIcon className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Settings</h2>
                <p className="text-gray-600">Settings panel coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {reviewModal && selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Review Project Submission</h3>
                <button
                  onClick={() => setReviewModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900">Student: {selectedSubmission.userName}</h4>
                <p className="text-gray-600">Course: {selectedSubmission.courseId}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Project Description:</h4>
                <p className="text-gray-700">{selectedSubmission.description}</p>
              </div>

              <div className="flex space-x-4">
                <a 
                  href={selectedSubmission.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800"
                >
                  View GitHub
                </a>
                <a 
                  href={selectedSubmission.youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700"
                >
                  Watch Demo
                </a>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Score (0-100)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={reviewScore}
                  onChange={(e) => setReviewScore(parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Minimum 60% required for certification
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Review Comments
                </label>
                <textarea
                  value={reviewComments}
                  onChange={(e) => setReviewComments(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Provide feedback on the project..."
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
              <button
                onClick={() => handleReviewSubmission("reject")}
                className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Reject
              </button>
              <button
                onClick={() => handleReviewSubmission("approve")}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}