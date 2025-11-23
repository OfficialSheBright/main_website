"use client";
import { useEffect, useState, useMemo } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../lib/firebase';
import { useEnrollment } from './useEnrollment';
import { CourseConfig, Module, UserProgress } from '../lib/course-configs';

interface CourseAccessHookProps {
  courseConfig: CourseConfig;
  initialTopicId?: string;
  userProgress?: UserProgress;
}

export function useCourseAccess({ courseConfig, initialTopicId }: CourseAccessHookProps) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [currentTopicId, setCurrentTopicId] = useState(() => {
    if (initialTopicId) return initialTopicId;
    if (courseConfig?.modules?.length > 0 && courseConfig.modules[0].topics.length > 0) {
      return courseConfig.modules[0].topics[0].id;
    }
    return "";
  });
  
  const {
    currentEnrollment,
    isEnrolled,
    updateProgress,
    completeCourse,
    loading: enrollmentLoading
  } = useEnrollment();

  // Check if user is enrolled in THIS specific course
  const isEnrolledInThisCourse = isEnrolled && currentEnrollment?.courseId === courseConfig.id;
  const userProgress = isEnrolledInThisCourse ? currentEnrollment.progress : null;

  // No need for effect to set currentTopicId based on userProgress or courseConfig

  // Redirect if not enrolled in this course
  useEffect(() => {
    if (!loading && !enrollmentLoading && user) {
      if (!isEnrolledInThisCourse) {
        router.push(`/protrack?course=${courseConfig.id}&action=enroll`);
      }
    }
  }, [user, loading, enrollmentLoading, isEnrolledInThisCourse, router, courseConfig.id]);

  // Generate modules with completion status
  const modules = useMemo((): Module[] => {
    if (!userProgress) return courseConfig.modules;
    return courseConfig.modules.map(module => ({
      ...module,
      topics: module.topics.map(topic => ({
        ...topic,
        completed: userProgress.topicsCompleted.includes(topic.id)
      }))
    }));
  }, [userProgress, courseConfig.modules]);

  // Navigation helpers
  const getAllTopics = () => {
    return courseConfig.modules.flatMap(module => module.topics);
  };

  const getCurrentTopic = () => {
    const allTopics = getAllTopics();
    return allTopics.find(topic => topic.id === currentTopicId);
  };

  const getNextTopic = () => {
    const allTopics = getAllTopics();
    const currentIndex = allTopics.findIndex(topic => topic.id === currentTopicId);
    return currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;
  };

  const getPreviousTopic = () => {
    const allTopics = getAllTopics();
    const currentIndex = allTopics.findIndex(topic => topic.id === currentTopicId);
    return currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  };

  // Progress management
  const markTopicComplete = async (topicId: string) => {
    if (!userProgress || userProgress.topicsCompleted.includes(topicId)) return;

    const updatedCompletedTopics = [...userProgress.topicsCompleted, topicId];
    const totalTopics = getAllTopics().length;
    const completionPercentage = Math.round((updatedCompletedTopics.length / totalTopics) * 100);

    // Update progress using the enrollment system
    updateProgress({
      topicsCompleted: updatedCompletedTopics,
      completionPercentage,
      isCompleted: completionPercentage === 100
    });

    // If course is 100% complete, mark as completed
    if (completionPercentage === 100) {
      await completeCourse();
    }
  };

  const navigateToTopic = (topicId: string) => {
    setCurrentTopicId(topicId);
    
    // Update current topic in progress
    if (userProgress) {
      updateProgress({
        currentTopic: topicId
      });
    }
  };

  // Check loading states
  const isLoading = loading || enrollmentLoading;

  return {
    // User state
    user,
    loading: isLoading,
    
    // Enrollment state
    isEnrolledInThisCourse,
    userProgress,
    currentEnrollment,
    
    // Course navigation
    currentTopicId,
    setCurrentTopicId,
    getCurrentTopic,
    getNextTopic,
    getPreviousTopic,
    navigateToTopic,
    
    // Course data
    modules,
    courseConfig,
    
    // Progress management
    markTopicComplete,
    updateProgress
  };
}