"use client";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import { useCourseAccess } from "../../../hooks/useCourseAccess";
import CourseContent from "@/components/CourseContent";
import ProgressSidebar from "@/components/ProgressSidebar";
import { cybersecurityConfig } from "@/lib/course-configs/cybersecurity";

export default function CybersecurityCourse() {
 // const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  // Use the course access hook - handles all enrollment logic
  const {
    user,
    loading,
    isEnrolledInThisCourse,
    userProgress,
   // currentEnrollment,
    currentTopicId,
    getCurrentTopic,
    getNextTopic,
    getPreviousTopic,
    navigateToTopic,
    modules,
    courseConfig,
    markTopicComplete
  } = useCourseAccess({ 
    courseConfig: cybersecurityConfig,
    initialTopicId: "security-basics" 
  });

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile notification
  if (isMobile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Desktop Required</h2>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            This learning platform is designed for desktop view and there&apos;s lots of work which you need to practice on desktop. Please use your laptop or PC to access this page.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 text-sm mb-3">Why desktop?</h3>
            <ul className="text-xs text-gray-600 space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                Security testing tools
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                Network security labs
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                Penetration testing environments
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                Better learning experience
              </li>
            </ul>
          </div>

          <button 
            onClick={() => window.location.reload()}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
          >
            Refresh if on Desktop
          </button>
          
          <p className="text-xs text-gray-500 mt-3">
            Minimum screen width: 768px required
          </p>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-400">
              {courseConfig.title} - Best experienced on desktop
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  // Not signed in
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign In Required</h2>
          <p className="text-gray-600 mb-6">Please sign in to access the {courseConfig.title}.</p>
          <a
            href="/login"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Sign In
          </a>
        </div>
      </div>
    );
  }

  // Not enrolled (will redirect automatically, but show message in case)
  if (!isEnrolledInThisCourse) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  // Main course interface
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Fixed Progress Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 z-10">
        <ProgressSidebar
          modules={modules}
          currentTopicId={currentTopicId}
          userProgress={userProgress ? { ...userProgress, currentTopic: userProgress.currentTopic || "" } : null}

          onTopicSelect={navigateToTopic}
          courseTitle={courseConfig.title}
        />
      </div>

      {/* Main Content Area */}
      <div className="ml-80 min-h-screen">
        <CourseContent
          currentTopic={getCurrentTopic()}
          nextTopic={getNextTopic()}
          previousTopic={getPreviousTopic()}
          onTopicComplete={markTopicComplete}
          onNavigateToTopic={navigateToTopic}
          userProgress={userProgress ? { ...userProgress, currentTopic: userProgress.currentTopic || "" } : null}

          courseId={courseConfig.id}
        />
      </div>
    </div>
  );
}