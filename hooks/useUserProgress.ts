"use client";
import { useState, useEffect, useCallback } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { 
  doc, 
  getDoc, 
  setDoc, 
 // updateDoc, 
  deleteDoc, 
  collection, 
  query, 
  where, 
  getDocs,
  serverTimestamp,
  // Timestamp
} from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { 
  UserEnrollment, 
  CourseEnrollmentState, 
  EnrollmentValidation, 
  CourseAvailability,
 // EnrollmentAction 
} from '../types/course';
import { CourseConfig } from '../lib/course-configs';

export interface UserProgress {
  userId: string;
  completedTopics: string[];
  overallProgress: number;
  lastAccessed: Date;
  enrollmentDate: Date;
}

export function useEnrollment() {
  const [user] = useAuthState(auth);
  const [enrollmentState, setEnrollmentState] = useState<CourseEnrollmentState>({
    currentEnrollment: null,
    isEnrolled: false,
    canEnrollInOther: true,
    enrollmentHistory: []
  });
  const [loading, setLoading] = useState(true);

  // Convert Firestore timestamps to Date objects
  const convertTimestamps = (data: Record<string, unknown> | null): Record<string, unknown> | null => {
    if (!data) return data;
    
    const converted = { ...data };
    
    if (
      typeof converted.enrollmentDate === 'object' &&
      converted.enrollmentDate !== null &&
      'toDate' in converted.enrollmentDate &&
      typeof (converted.enrollmentDate as { toDate: () => Date }).toDate === 'function'
    ) {
      converted.enrollmentDate = (converted.enrollmentDate as { toDate: () => Date }).toDate();
    }
    if (
      typeof converted.completionDate === 'object' &&
      converted.completionDate !== null &&
      'toDate' in converted.completionDate &&
      typeof (converted.completionDate as { toDate: () => Date }).toDate === 'function'
    ) {
      converted.completionDate = (converted.completionDate as { toDate: () => Date }).toDate();
    }
    if (converted.progress && typeof converted.progress === 'object' && converted.progress !== null) {
      if (
        'startDate' in converted.progress &&
        typeof (converted.progress as Record<string, unknown>).startDate === 'object' &&
        (converted.progress as Record<string, unknown>).startDate !== null &&
        typeof (converted.progress as Record<string, unknown>).startDate === 'object' &&
        (converted.progress as Record<string, unknown>).startDate !== null &&
        typeof (converted.progress as Record<string, unknown>).startDate === 'object' &&
        (converted.progress as Record<string, unknown>).startDate !== null &&
        typeof (converted.progress as Record<string, unknown>).startDate === 'object' &&
        (converted.progress as Record<string, unknown>).startDate !== null &&
        typeof (converted.progress as Record<string, unknown>).startDate === 'object' &&
        (converted.progress as Record<string, unknown>).startDate !== null &&
        typeof (converted.progress as Record<string, unknown>).startDate === 'object' &&
        (converted.progress as Record<string, unknown>).startDate !== null &&
        typeof (converted.progress as Record<string, unknown>).startDate === 'object' &&
        (converted.progress as Record<string, unknown>).startDate !== null &&
        'toDate' in ((converted.progress as Record<string, unknown>).startDate as object) &&
        typeof ((converted.progress as { [key: string]: unknown }).startDate) === 'object' &&
        (converted.progress as { [key: string]: unknown }).startDate !== null &&
        typeof ((converted.progress as { [key: string]: { toDate?: () => Date } }).startDate as { toDate?: () => Date }).toDate === 'function'
      ) {
        (converted.progress as Record<string, unknown>).startDate = ((converted.progress as Record<string, unknown>).startDate as { toDate: () => Date }).toDate();
      }
      if (
        'lastAccessDate' in converted.progress &&
        typeof (converted.progress as Record<string, unknown>).lastAccessDate === 'object' &&
        (converted.progress as Record<string, unknown>).lastAccessDate !== null &&
        typeof (converted.progress as Record<string, unknown>).lastAccessDate === 'object' &&
        (converted.progress as Record<string, unknown>).lastAccessDate !== null &&
        'toDate' in (converted.progress as { lastAccessDate: { toDate?: () => Date } }).lastAccessDate &&
        typeof ((converted.progress as Record<string, unknown>).lastAccessDate as { toDate: () => Date }).toDate === 'function'
      ) {
        (converted.progress as Record<string, unknown>).lastAccessDate = ((converted.progress as Record<string, unknown>).lastAccessDate as { toDate: () => Date }).toDate();
      }
      if (
        'completionDate' in converted.progress &&
        typeof (converted.progress as Record<string, unknown>).completionDate === 'object' &&
        (converted.progress as Record<string, unknown>).completionDate !== null &&
        typeof (converted.progress as Record<string, unknown>).completionDate === 'object' &&
        typeof (converted.progress as Record<string, unknown>).completionDate === 'object' &&
        (converted.progress as Record<string, unknown>).completionDate !== null &&
        typeof (converted.progress as Record<string, unknown>).completionDate === 'object' &&
        (converted.progress as Record<string, unknown>).completionDate !== null &&
        typeof (converted.progress as Record<string, unknown>).completionDate === 'object' &&
        converted.progress.completionDate !== null &&
        'toDate' in (converted.progress.completionDate as object) &&
        typeof ((converted.progress as { [key: string]: unknown }).completionDate as { toDate?: () => Date }).toDate === 'function'
      ) {
        (converted.progress as Record<string, unknown>).completionDate = ((converted.progress as Record<string, unknown>).completionDate as { toDate: () => Date }).toDate();
      }
    }
    
    return converted;
  };

  // Load enrollment state from Firestore
  useEffect(() => {
    const loadEnrollmentState = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        // Load current enrollment
        const enrollmentRef = doc(db, 'enrollments', user.uid);
        const enrollmentSnap = await getDoc(enrollmentRef);
        
        // Load enrollment history
        const historyQuery = query(
          collection(db, 'enrollment_history'), 
          where('userId', '==', user.uid)
        );
        const historySnap = await getDocs(historyQuery);
        
        const history = historySnap.docs
          .map(doc => convertTimestamps({
            id: doc.id,
            ...doc.data()
          }) as UserEnrollment | null)
          .filter((item): item is UserEnrollment => item !== null);

        if (enrollmentSnap.exists()) {
          const currentEnrollment = convertTimestamps(enrollmentSnap.data()) as unknown as UserEnrollment;
          
          setEnrollmentState({
            currentEnrollment,
            isEnrolled: true,
            canEnrollInOther: false,
            enrollmentHistory: history
          });
        } else {
          setEnrollmentState({
            currentEnrollment: null,
            isEnrolled: false,
            canEnrollInOther: true,
            enrollmentHistory: history
          });
        }
      } catch (error) {
        console.error('Error loading enrollment state:', error);
        setEnrollmentState({
          currentEnrollment: null,
          isEnrolled: false,
          canEnrollInOther: true,
          enrollmentHistory: []
        });
      } finally {
        setLoading(false);
      }
    };

    loadEnrollmentState();
  }, [user]);

  // Validate if user can enroll in a course
  const validateEnrollment = useCallback((courseId: string): EnrollmentValidation => {
    const { currentEnrollment, isEnrolled } = enrollmentState;

    // If already enrolled in the same course
    if (currentEnrollment?.courseId === courseId) {
      return {
        canEnroll: false,
        reason: 'ALREADY_ENROLLED_IN_SAME_COURSE',
        currentEnrollment,
        requiresConfirmation: false,
        warningMessage: 'You are already enrolled in this course.'
      };
    }

    // If enrolled in a different course
    if (isEnrolled && currentEnrollment) {
      return {
        canEnroll: false,
        reason: 'ALREADY_ENROLLED_IN_OTHER_COURSE',
        currentEnrollment,
        requiresConfirmation: true,
        warningMessage: `You are currently enrolled in "${currentEnrollment.courseName}". You can only be enrolled in one course at a time. Would you like to unenroll from your current course to enroll in this one?`
      };
    }

    // Can enroll
    return {
      canEnroll: true,
      requiresConfirmation: true,
      warningMessage: 'Important: You can only be enrolled in one course at a time. Once enrolled, other courses will be locked until you complete or unenroll from this course. Choose carefully!'
    };
  }, [enrollmentState]);

  // Get course availability status
  const getCourseAvailability = useCallback((courseId: string): CourseAvailability => {
    const { currentEnrollment, isEnrolled } = enrollmentState;

    if (currentEnrollment?.courseId === courseId) {
      return {
        courseId,
        isAvailable: true,
        isLocked: false,
        canPreview: true
      };
    }

    if (isEnrolled) {
      return {
        courseId,
        isAvailable: false,
        isLocked: true,
        lockReason: 'ALREADY_ENROLLED',
        canPreview: true
      };
    }

    return {
      courseId,
      isAvailable: true,
      isLocked: false,
      canPreview: true
    };
  }, [enrollmentState]);

  // Enroll in a course
  const enrollInCourse = useCallback(async (course: CourseConfig): Promise<{ success: boolean; message: string }> => {
    if (!user) {
      return {
        success: false,
        message: 'Please log in to enroll in courses'
      };
    }

    try {
      const validation = validateEnrollment(course.id);
      
      if (!validation.canEnroll && validation.reason !== 'ALREADY_ENROLLED_IN_OTHER_COURSE') {
        return {
          success: false,
          message: validation.warningMessage || 'Cannot enroll in this course'
        };
      }

      const now = new Date();
      const enrollment: UserEnrollment = {
        courseId: course.id,
        courseName: course.title,
        enrollmentDate: now,
        canUnenroll: true,
        progress: {
          userId: user.uid,
          courseId: course.id,
          topicsCompleted: [],
          currentTopic: null,
          completionPercentage: 0,
          isCompleted: false,
          lastAccessed: now,
          enrollmentDate: now,
          startDate: now,
          lastAccessDate: now,
          completedTopics: [],
          overallProgress: 0,
        }
      };

      // Save current enrollment to history if exists
      if (enrollmentState.currentEnrollment) {
        const historyRef = doc(collection(db, 'enrollment_history'));
        await setDoc(historyRef, {
          ...enrollmentState.currentEnrollment,
          userId: user.uid,
          canUnenroll: false,
          movedToHistoryDate: serverTimestamp()
        });
      }

      // Save new enrollment
      const enrollmentRef = doc(db, 'enrollments', user.uid);
      await setDoc(enrollmentRef, {
        ...enrollment,
        userId: user.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

      // Update local state
      const newState: CourseEnrollmentState = {
        currentEnrollment: enrollment,
        isEnrolled: true,
        canEnrollInOther: false,
        enrollmentHistory: enrollmentState.currentEnrollment 
          ? [...enrollmentState.enrollmentHistory, { ...enrollmentState.currentEnrollment, canUnenroll: false }]
          : enrollmentState.enrollmentHistory
      };

      setEnrollmentState(newState);

      return {
        success: true,
        message: `Successfully enrolled in "${course.title}"`
      };
    } catch (error) {
      console.error('Error enrolling in course:', error);
      return {
        success: false,
        message: 'Failed to enroll in course. Please try again.'
      };
    }
  }, [user, enrollmentState, validateEnrollment]);

  // Unenroll from current course
  const unenrollFromCourse = useCallback(async (): Promise<{ success: boolean; message: string }> => {
    if (!user) {
      return {
        success: false,
        message: 'Please log in to manage enrollments'
      };
    }

    try {
      const { currentEnrollment } = enrollmentState;

      if (!currentEnrollment) {
        return {
          success: false,
          message: 'No active enrollment found'
        };
      }

      if (!currentEnrollment.canUnenroll) {
        return {
          success: false,
          message: 'Cannot unenroll from completed course'
        };
      }

      // Move to history
      const historyRef = doc(collection(db, 'enrollment_history'));
      await setDoc(historyRef, {
        ...currentEnrollment,
        userId: user.uid,
        canUnenroll: false,
        unenrollmentDate: serverTimestamp()
      });

      // Delete current enrollment
      const enrollmentRef = doc(db, 'enrollments', user.uid);
      await deleteDoc(enrollmentRef);

      // Update local state
      const newState: CourseEnrollmentState = {
        currentEnrollment: null,
        isEnrolled: false,
        canEnrollInOther: true,
        enrollmentHistory: [...enrollmentState.enrollmentHistory, { ...currentEnrollment, canUnenroll: false }]
      };

      setEnrollmentState(newState);

      return {
        success: true,
        message: `Successfully unenrolled from "${currentEnrollment.courseName}"`
      };
    } catch (error) {
      console.error('Error unenrolling from course:', error);
      return {
        success: false,
        message: 'Failed to unenroll. Please try again.'
      };
    }
  }, [user, enrollmentState]);

  // Complete current course
  const completeCourse = useCallback(async (): Promise<{ success: boolean; message: string }> => {
    if (!user) {
      return {
        success: false,
        message: 'Please log in to complete courses'
      };
    }

    try {
      const { currentEnrollment } = enrollmentState;

      if (!currentEnrollment) {
        return {
          success: false,
          message: 'No active enrollment found'
        };
      }

      const completionDate = new Date();
      const completedEnrollment: UserEnrollment = {
        ...currentEnrollment,
        canUnenroll: false,
        completionDate,
        progress: {
          ...currentEnrollment.progress,
          completionPercentage: 100,
          isCompleted: true,
          completionDate,
          lastAccessDate: completionDate
        }
      };

      // Move to history with completion
      const historyRef = doc(collection(db, 'enrollment_history'));
      await setDoc(historyRef, {
        ...completedEnrollment,
        userId: user.uid,
        completedAt: serverTimestamp()
      });

      // Delete current enrollment
      const enrollmentRef = doc(db, 'enrollments', user.uid);
      await deleteDoc(enrollmentRef);

      // Update local state
      const newState: CourseEnrollmentState = {
        currentEnrollment: null,
        isEnrolled: false,
        canEnrollInOther: true,
        enrollmentHistory: [...enrollmentState.enrollmentHistory, completedEnrollment]
      };

      setEnrollmentState(newState);

      return {
        success: true,
        message: `Congratulations! You've completed "${currentEnrollment.courseName}"`
      };
    } catch (error) {
      console.error('Error completing course:', error);
      return {
        success: false,
        message: 'Failed to mark course as complete. Please try again.'
      };
    }
  }, [user, enrollmentState]);

  // Update progress for current enrollment
const updateProgress = useCallback(async (updates: Partial<UserEnrollment['progress']>) => {
  if (!user || !enrollmentState.currentEnrollment) return;

  try {
    const updatedProgress = {
      ...enrollmentState.currentEnrollment.progress,
      ...updates,
      lastAccessDate: new Date()
    };

    const updatedEnrollment: UserEnrollment = {
      ...enrollmentState.currentEnrollment,
      progress: updatedProgress
    };

    const enrollmentRef = doc(db, 'enrollments', user.uid);

    // Use setDoc with merge to ensure the document is created if missing
    await setDoc(enrollmentRef, {
      ...enrollmentState.currentEnrollment,
      progress: updatedProgress,
      updatedAt: serverTimestamp()
    }, { merge: true });

    setEnrollmentState({
      ...enrollmentState,
      currentEnrollment: updatedEnrollment
    });
  } catch (error) {
    console.error('Error updating progress:', error);
  }
}, [user, enrollmentState]);

  // Check if course is completed
  const isCourseCompleted = useCallback((courseId: string): boolean => {
    return enrollmentState.enrollmentHistory.some(
      enrollment => enrollment.courseId === courseId && enrollment.progress.isCompleted
    );
  }, [enrollmentState.enrollmentHistory]);

  return {
    // State
    enrollmentState,
    loading,
    
    // Current enrollment info
    currentEnrollment: enrollmentState.currentEnrollment,
    isEnrolled: enrollmentState.isEnrolled,
    canEnrollInOther: enrollmentState.canEnrollInOther,
    
    // Actions
    enrollInCourse,
    unenrollFromCourse,
    completeCourse,
    updateProgress,
    
    // Validation & Utilities
    validateEnrollment,
    getCourseAvailability,
    isCourseCompleted,
    
    // History
    enrollmentHistory: enrollmentState.enrollmentHistory
  };
}