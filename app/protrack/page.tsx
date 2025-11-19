"use client";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../lib/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  modules: number;
  topics: number;
  difficulty: string;
  skills: string[];
  color: string;
}

interface UserProgress {
  courseId: string;
  enrolled: boolean;
  completedTopics: string[];
  overallProgress: number;
}

export default function ProTrackDashboard() {
  const [user, loading] = useAuthState(auth);
  const [courses, setCourses] = useState<Course[]>([]);
  const [userProgress, setUserProgress] = useState<Record<string, UserProgress>>({});
  const [coursesLoading, setCoursesLoading] = useState(true);
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
      return;
    }
  }, [user, loading, router]);

  // Fetch courses from Firestore
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesRef = collection(db, "courses");
        const snapshot = await getDocs(coursesRef);
        const coursesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Course[];
        setCourses(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setCoursesLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Fetch user progress for enrolled courses
  useEffect(() => {
    const fetchUserProgress = async () => {
      if (!user) return;

      try {
        const progressData: Record<string, UserProgress> = {};
        
        for (const course of courses) {
          const progressRef = doc(db, "courseProgress", `${user.uid}_${course.id}`);
          const progressSnap = await getDoc(progressRef);
          
          if (progressSnap.exists()) {
            progressData[course.id] = progressSnap.data() as UserProgress;
          }
        }
        
        setUserProgress(progressData);
      } catch (error) {
        console.error("Error fetching user progress:", error);
      }
    };

    if (courses.length > 0 && user) {
      fetchUserProgress();
    }
  }, [courses, user]);

  if (loading || coursesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome back, {user.displayName || 'Learner'}!
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Continue your learning journey or explore new professional paths
            </p>
          </div>
        </div>
      </section>

      {/* My Learning Section - Show enrolled courses */}
      {Object.keys(userProgress).length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {courses
              .filter(course => userProgress[course.id]?.enrolled)
              .map((course) => {
                const progress = userProgress[course.id];
                return (
                  <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-blue-500">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                        <span className="text-sm text-gray-500">{progress.overallProgress}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${progress.overallProgress}%` }}
                        ></div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm">{progress.completedTopics.length} topics completed</p>
                      
                      <Link 
                        href={`/courses/${course.id}`}
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                      >
                        Continue Learning
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      )}

      {/* All Courses Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            All Learning Paths
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each path is designed to take you from beginner to job-ready professional with hands-on projects and real-world experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const isEnrolled = userProgress[course.id]?.enrolled;
            const progress = userProgress[course.id];
            
            return (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                
                {/* Course Header */}
                <div className={`bg-gradient-to-r ${course.color || 'from-blue-600 to-indigo-700'} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    } bg-opacity-20 text-white`}>
                      {course.difficulty}
                    </span>
                    <span className="text-sm opacity-90">{course.duration}</span>
                  </div>
                  
                  {isEnrolled && (
                    <div className="mb-2">
                      <div className="flex items-center justify-between text-sm opacity-90">
                        <span>Progress</span>
                        <span>{progress.overallProgress}%</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-1 mt-1">
                        <div 
                          className="bg-white h-1 rounded-full transition-all duration-300" 
                          style={{ width: `${progress.overallProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-sm opacity-90">{course.description}</p>
                </div>

                {/* Course Details */}
                <div className="p-6">
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{course.modules}</div>
                      <div className="text-sm text-gray-600">Modules</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{course.topics}</div>
                      <div className="text-sm text-gray-600">Topics</div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Skills You&apos;ll Learn</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills?.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href={`/courses/${course.id}`}
                    className={`w-full ${
                      isEnrolled 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : `bg-gradient-to-r ${course.color || 'from-blue-600 to-indigo-700'}`
                    } text-white py-3 px-6 rounded-lg font-semibold text-center block hover:shadow-lg transition-all duration-200 group-hover:scale-105`}
                  >
                    {isEnrolled ? 'Continue Learning' : 'View Course'}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Loading state */}
        {courses.length === 0 && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading courses...</p>
          </div>
        )}
      </section>
    </div>
  );
}