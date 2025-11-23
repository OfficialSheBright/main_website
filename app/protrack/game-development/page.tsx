"use client";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import { useCourseAccess } from "../../../hooks/useCourseAccess";
import CourseContent from "@/components/CourseContent";
import ProgressSidebar from "@/components/ProgressSidebar";
import { gameDevelopmentConfig } from "@/lib/course-configs/game-development";

export default function GameDevelopmentCourse() {
  //const router = useRouter();
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
    courseConfig: gameDevelopmentConfig,
    initialTopicId: "game-basics" 
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1z" />
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
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                Game engine interfaces
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                3D modeling & animation
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                Game testing environments
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                Better learning experience
              </li>
            </ul>
          </div>

          <button 
            onClick={() => window.location.reload()}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
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
            href="/auth/login"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
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