"use client";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  AcademicCapIcon, 
  ClockIcon, 
  TrophyIcon, 
  ChartBarIcon,
  BookOpenIcon,
  FireIcon,
  //CertificateIcon,
  StarIcon
} from "@heroicons/react/24/outline";

interface UserProgress {
  courseId: string;
  userId: string;
  completedTopics: string[];
  currentTopic: string;
  overallProgress: number;
  lastAccessed: Date;
  enrollmentDate: Date;
  projectSubmitted?: boolean;
  projectApproved?: boolean;
  projectScore?: number;
  certificateEarned?: boolean;
}

interface CourseInfo {
  id: string;
  title: string;
  description: string;
  totalTopics: number;
  difficulty: string;
  color: string;
}

interface UserProfile {
  name: string;
  email: string;
  dob?: string;
  college?: string;
  course?: string;
  year?: string;
  phone?: string;
  createdAt: Date;
}

const courseDetails: Record<string, CourseInfo> = {
  "web-development": {
    id: "web-development",
    title: "Complete Web Development",
    description: "Master frontend and backend development",
    totalTopics: 40, // Updated to match actual course config
    difficulty: "Beginner to Advanced",
    color: "from-blue-600 to-indigo-700"
  },
  "mobile-development": {
    id: "mobile-development", 
    title: "Mobile App Development",
    description: "Build native and cross-platform mobile apps",
    totalTopics: 32,
    difficulty: "Intermediate",
    color: "from-green-600 to-emerald-700"
  },
  "ai-ml": {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Artificial intelligence and ML fundamentals",
    totalTopics: 40,
    difficulty: "Advanced",
    color: "from-purple-600 to-violet-700"
  }
};

export default function Profile() {
  const [user, loading] = useAuthState(auth);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<UserProgress[]>([]);
  const [userStats, setUserStats] = useState({
    totalCoursesEnrolled: 0,
    totalTopicsCompleted: 0,
    totalHoursLearned: 0,
    currentStreak: 0,
    completedCourses: 0,
    certificatesEarned: 0
  });
  const [loadingData, setLoadingData] = useState(false);
 // const router = useRouter();

  useEffect(() => {
    if (user) {
      loadUserData();
    }
  }, [user]);

  const loadUserData = async () => {
    if (!user) return;
    
    setLoadingData(true);
    try {
      // Load user profile data
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        setUserProfile(userDoc.data() as UserProfile);
      }

      // Load enrolled courses
      const coursesQuery = query(
        collection(db, "courseProgress"), 
        where("userId", "==", user.uid)
      );
      const coursesSnapshot = await getDocs(coursesQuery);
      
      const courses: UserProgress[] = [];
      let totalCompleted = 0;
      let completedCourses = 0;
      let certificatesEarned = 0;
      
      coursesSnapshot.forEach((doc) => {
        const courseData = doc.data() as UserProgress;
        courses.push(courseData);
        totalCompleted += courseData.completedTopics.length;
        
        if (courseData.overallProgress === 100) {
          completedCourses++;
        }
        
        if (courseData.certificateEarned) {
          certificatesEarned++;
        }
      });
      
      setEnrolledCourses(courses);
      setUserStats({
        totalCoursesEnrolled: courses.length,
        totalTopicsCompleted: totalCompleted,
        totalHoursLearned: Math.round(totalCompleted * 1.5), // Assuming 1.5 hours per topic
        currentStreak: 7, // This could be calculated from activity logs
        completedCourses,
        certificatesEarned
      });
      
    } catch (error) {
      console.error("Error loading user data:", error);
    } finally {
      setLoadingData(false);
    }
  };

  const getAchievementBadges = () => {
    const badges = [];
    
    if (userStats.totalTopicsCompleted >= 10) {
      badges.push({ name: "First Steps", icon: "🎯", description: "Completed 10 topics" });
    }
    if (userStats.totalTopicsCompleted >= 50) {
      badges.push({ name: "Learning Streak", icon: "🔥", description: "Completed 50 topics" });
    }
    if (userStats.completedCourses >= 1) {
      badges.push({ name: "Course Completer", icon: "🏆", description: "Completed first course" });
    }
    if (userStats.certificatesEarned >= 1) {
      badges.push({ name: "Certified", icon: "🏅", description: "Earned first certificate" });
    }
    if (userStats.currentStreak >= 7) {
      badges.push({ name: "Weekly Warrior", icon: "⚡", description: "7-day learning streak" });
    }
    if (userStats.totalHoursLearned >= 100) {
      badges.push({ name: "Century Club", icon: "💯", description: "100 hours of learning" });
    }
    
    return badges;
  };

  if (loading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 py-16 text-center bg-white rounded-2xl shadow-xl">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AcademicCapIcon className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Profile Access</h2>
          <p className="text-gray-600 mb-6">Sign in to view your learning progress and achievements.</p>
          <Link 
            href="/login" 
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg"
          >
            Sign In
          </Link>
        </div>
      </section>
    );
  }

  const achievements = getAchievementBadges();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {userProfile?.name ? userProfile.name.charAt(0).toUpperCase() : user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {userProfile?.name || user.displayName || "Learning Enthusiast"}
              </h1>
              <p className="text-gray-600 text-lg">{user.email}</p>
              {userProfile?.college && (
                <p className="text-gray-500 text-sm">{userProfile.college} • {userProfile.course} • {userProfile.year}</p>
              )}
              <div className="flex items-center space-x-4 mt-3">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <StarIcon className="w-4 h-4 mr-1" />
                  Pro Learner
                </span>
                <span className="text-gray-500 text-sm">
                  Member since {new Date(user.metadata.creationTime || "").toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Courses Enrolled</p>
                <p className="text-3xl font-bold text-gray-900">{userStats.totalCoursesEnrolled}</p>
              </div>
              <BookOpenIcon className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Topics Completed</p>
                <p className="text-3xl font-bold text-gray-900">{userStats.totalTopicsCompleted}</p>
              </div>
              <ChartBarIcon className="w-8 h-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Hours Learned</p>
                <p className="text-3xl font-bold text-gray-900">{userStats.totalHoursLearned}</p>
              </div>
              <ClockIcon className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Current Streak</p>
                <p className="text-3xl font-bold text-gray-900">{userStats.currentStreak}</p>
              </div>
              <FireIcon className="w-8 h-8 text-orange-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Certificates</p>
                <p className="text-3xl font-bold text-gray-900">{userStats.certificatesEarned}</p>
              </div>
              <AcademicCapIcon className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Enrolled Courses */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Learning Progress</h2>
            
            {enrolledCourses.length > 0 ? (
              <div className="space-y-6">
                {enrolledCourses.map((course) => {
                  const courseInfo = courseDetails[course.courseId];
                  if (!courseInfo) return null;
                  
                  return (
                    <div key={course.courseId} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {courseInfo.title}
                            </h3>
                            {course.certificateEarned && (
                              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                                <AcademicCapIcon className="w-3 h-3 mr-1" />
                                Certified
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm">{courseInfo.description}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          courseInfo.difficulty === 'Beginner' || courseInfo.difficulty === 'Beginner to Advanced' ? 'bg-green-100 text-green-800' :
                          courseInfo.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {courseInfo.difficulty}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-semibold text-gray-900">
                            {course.completedTopics.length} / {courseInfo.totalTopics} topics ({Math.round(course.overallProgress)}%)
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r ${courseInfo.color} h-2 rounded-full transition-all duration-300`}
                            style={{ width: `${course.overallProgress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Project Status */}
                      {course.overallProgress >= 90 && (
                        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 text-sm mb-1">Capstone Project Status</h4>
                          {!course.projectSubmitted ? (
                            <p className="text-blue-700 text-xs">Ready to submit your capstone project for certification!</p>
                          ) : course.projectApproved && course.projectScore !== undefined ? (
                            <div className="text-xs">
                              <span className={`${course.projectScore >= 60 ? 'text-green-700' : 'text-red-700'}`}>
                                Score: {course.projectScore}% {course.projectScore >= 60 ? '(Passed)' : '(Needs Improvement)'}
                              </span>
                            </div>
                          ) : (
                            <p className="text-blue-700 text-xs">Project submitted - under review</p>
                          )}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Last accessed: {new Date(course.lastAccessed).toLocaleDateString()}
                        </span>
                        <Link 
                          href={`/protrack/${course.courseId}`}
                          className={`bg-gradient-to-r ${courseInfo.color} text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-200`}
                        >
                          {course.overallProgress === 100 ? 'Review Course' : 'Continue Learning'}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpenIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Courses Yet</h3>
                <p className="text-gray-600 mb-6">Start your learning journey by enrolling in a course.</p>
                <Link 
                  href="/protrack"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg"
                >
                  Explore Courses
                </Link>
              </div>
            )}
          </div>

          {/* Achievements & Actions */}
          <div className="space-y-6">
            
            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrophyIcon className="w-6 h-6 text-yellow-500 mr-2" />
                Achievements
              </h3>
              
              {achievements.length > 0 ? (
                <div className="space-y-3">
                  {achievements.map((badge, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                      <span className="text-2xl">{badge.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{badge.name}</p>
                        <p className="text-gray-600 text-xs">{badge.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-gray-500 text-sm">Complete topics to earn achievements!</p>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  href="/protrack"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-lg font-semibold text-center block hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                >
                  Browse All Courses
                </Link>
                {/* {userStats.certificatesEarned > 0 && (
                  <Link 
                    href="/certificates"
                    className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-3 rounded-lg font-semibold text-center block hover:from-yellow-700 hover:to-orange-700 transition-all duration-200"
                  >
                    View Certificates ({userStats.certificatesEarned})
                  </Link>
                )}
                <button 
                  onClick={() => router.push('/protrack/assessment')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                >
                  Take Skills Assessment
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}