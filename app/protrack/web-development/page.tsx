"use client";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from "../../../lib/firebase";
import CourseContent from "@/components/CourseContent";
import ProgressSidebar from "@/components/ProgressSidebar";
import { webDevelopmentConfig } from "@/lib/course-configs/web-development";
import type { Topic, Module } from "@/lib/course-configs";
 import { useMemo } from "react";

interface UserProgress {
  courseId: string;
  userId: string;
  completedTopics: string[];
  currentTopic: string;
  overallProgress: number;
  lastAccessed: Date;
  enrollmentDate: Date;
}

export default function WebDevelopmentCourse() {
  const [user, loading] = useAuthState(auth);
  const [enrolled, setEnrolled] = useState(false);
  const [currentTopicId, setCurrentTopicId] = useState("html-basics");
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  // Remove modules state, use memo instead

  const courseConfig = webDevelopmentConfig;

  const loadUserProgress = async () => {
    if (!user) return;
    
    try {
      const progressDoc = await getDoc(doc(db, "courseProgress", `${user.uid}_${courseConfig.id}`));
      
      if (progressDoc.exists()) {
        const progress = progressDoc.data() as UserProgress;
        setUserProgress(progress);
        setCurrentTopicId(progress.currentTopic);
        setEnrolled(true);
      }
    } catch (error) {
      console.error("Error loading user progress:", error);
    }
  };

  useEffect(() => {
    if (user) {
      (async () => {
        await loadUserProgress();
      })();
    }
  }, [user]);

  const modules = useMemo(() => {
    if (!userProgress) return courseConfig.modules;
    return courseConfig.modules.map(module => ({
      ...module,
      topics: module.topics.map(topic => ({
        ...topic,
        completed: userProgress.completedTopics.includes(topic.id)
      }))
    }));
  }, [userProgress, courseConfig.modules]);

  const enrollInCourse = async () => {
    if (!user) return;

    const newProgress: UserProgress = {
      courseId: courseConfig.id,
      userId: user.uid,
      completedTopics: [],
      currentTopic: courseConfig.modules[0].topics[0].id,
      overallProgress: 0,
      lastAccessed: new Date(),
      enrollmentDate: new Date()
    };

    try {
      await setDoc(doc(db, "courseProgress", `${user.uid}_${courseConfig.id}`), newProgress);
      await setDoc(doc(db, "userEnrollments", user.uid), {
        courses: arrayUnion(courseConfig.id),
        enrollmentDate: new Date()
      }, { merge: true });

      setUserProgress(newProgress);
      setEnrolled(true);
    } catch (error) {
      console.error("Error enrolling in course:", error);
    }
  };

  // No need to setModules, modules are now computed with useMemo
    const markTopicComplete = async (topicId: string) => {
      if (!user || !userProgress) return;
  
      const isAlreadyCompleted = userProgress.completedTopics.includes(topicId);
      if (isAlreadyCompleted) return;
  
      const updatedCompletedTopics = [...userProgress.completedTopics, topicId];
      const totalTopics = courseConfig.modules.reduce((acc, module) => acc + module.topics.length, 0);
      const overallProgress = Math.round((updatedCompletedTopics.length / totalTopics) * 100);
  
      const updatedProgress: UserProgress = {
        ...userProgress,
        completedTopics: updatedCompletedTopics,
        overallProgress,
        lastAccessed: new Date()
      };
  
      try {
        await updateDoc(doc(db, "courseProgress", `${user.uid}_${courseConfig.id}`), {
          completedTopics: updatedCompletedTopics,
          overallProgress,
          lastAccessed: new Date()
        });
  
        setUserProgress(updatedProgress);
      } catch (error) {
        console.error("Error updating progress:", error);
      }
    };

  const navigateToTopic = async (topicId: string) => {
    setCurrentTopicId(topicId);
    
    if (user && userProgress) {
      try {
        await updateDoc(doc(db, "courseProgress", `${user.uid}_${courseConfig.id}`), {
          currentTopic: topicId,
          lastAccessed: new Date()
        });
        
        setUserProgress({
          ...userProgress,
          currentTopic: topicId,
          lastAccessed: new Date()
        });
      } catch (error) {
        console.error("Error updating current topic:", error);
      }
    }
  };

  const getNextTopic = () => {
    const allTopics = courseConfig.modules.flatMap(module => module.topics);
    const currentIndex = allTopics.findIndex(topic => topic.id === currentTopicId);
    return currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;
  };

  const getPreviousTopic = () => {
    const allTopics = courseConfig.modules.flatMap(module => module.topics);
    const currentIndex = allTopics.findIndex(topic => topic.id === currentTopicId);
    return currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  };

  const getCurrentTopic = () => {
    const allTopics = courseConfig.modules.flatMap(module => module.topics);
    return allTopics.find(topic => topic.id === currentTopicId);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign In Required</h2>
          <p className="text-gray-600 mb-6">Please sign in to access the {courseConfig.title}.</p>
          <a
            href="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </a>
        </div>
      </div>
    );
  }

  if (!enrolled) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-12 text-white">
              <h1 className="text-4xl font-bold mb-4">{courseConfig.title}</h1>
              <p className="text-xl opacity-90 mb-6">
                {courseConfig.description}
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <span className="text-2xl font-bold">{courseConfig.modules.reduce((acc, m) => acc + m.topics.length, 0)}</span>
                  <span className="ml-2 opacity-90">Lessons</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">~{courseConfig.totalHours}</span>
                  <span className="ml-2 opacity-90">Hours</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">{courseConfig.modules.length}</span>
                  <span className="ml-2 opacity-90">Modules</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {courseConfig.modules.map((module, index) => (
                  <div key={module.id} className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Module {index + 1}: {module.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {module.topics.map((topic) => (
                        <div key={topic.id} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          <span>{topic.title}</span>
                          <span className="ml-auto text-xs">({topic.duration})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button
                  onClick={enrollInCourse}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Enroll in Course - Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Progress Sidebar */}
      <ProgressSidebar
        modules={modules}
        currentTopicId={currentTopicId}
        userProgress={userProgress}
        onTopicSelect={navigateToTopic}
        courseTitle={courseConfig.title}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <CourseContent
          currentTopic={getCurrentTopic()}
          nextTopic={getNextTopic()}
          previousTopic={getPreviousTopic()}
          onTopicComplete={markTopicComplete}
          onNavigateToTopic={navigateToTopic}
          userProgress={userProgress}
          courseId={courseConfig.id}
        />
      </div>
    </div>
  );
}