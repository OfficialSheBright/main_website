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
  Timestamp
} from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { 
  UserEnrollment, 
  CourseEnrollmentState, 
  EnrollmentValidation, 
  CourseAvailability,
//  EnrollmentAction 
} from '../types/course';
import { CourseConfig } from '../lib/course-configs';

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
    
    if (converted.enrollmentDate && typeof (converted.enrollmentDate as Timestamp).toDate === 'function') {
      if (converted.enrollmentDate instanceof Timestamp) {
        converted.enrollmentDate = converted.enrollmentDate.toDate();
      }
    }
    if (converted.completionDate && typeof (converted.completionDate as Timestamp).toDate === 'function') {
      if (converted.completionDate instanceof Timestamp) {
        converted.completionDate = converted.completionDate.toDate();
      }
    }
    if (converted.progress && typeof converted.progress === 'object') {
      if ('startDate' in converted.progress && (converted.progress as { startDate?: Timestamp }).startDate?.toDate) {
        if (converted.progress.startDate instanceof Timestamp) {
          converted.progress.startDate = converted.progress.startDate.toDate();
        }
      }
      if ('lastAccessDate' in converted.progress && (converted.progress as { lastAccessDate?: Timestamp }).lastAccessDate?.toDate) {
        if (converted.progress.lastAccessDate instanceof Timestamp) {
          converted.progress.lastAccessDate = converted.progress.lastAccessDate.toDate();
        }
      }
      if ('completionDate' in converted.progress && (converted.progress as { completionDate?: Timestamp }).completionDate?.toDate) {
        if (converted.progress.completionDate instanceof Timestamp) {
          converted.progress.completionDate = converted.progress.completionDate.toDate();
        }
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
        
        const history = historySnap.docs.map(doc => convertTimestamps({
          id: doc.id,
          ...doc.data()
        }) as unknown as UserEnrollment);

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
          completedTopics: [],
          topicsCompleted: [], // keep if still used elsewhere, otherwise remove
          currentTopic: course.modules[0]?.topics[0]?.id || null,
          completionPercentage: 0,
          overallProgress: 0,
          startDate: now,
          enrollmentDate: now,
          lastAccessDate: now,
          lastAccessed: now,
          isCompleted: false,
          completionDate: null // or null, if allowed
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
  if (!user) return;

  setEnrollmentState(prevState => {
    const currentEnrollment = prevState.currentEnrollment;
    if (!currentEnrollment) return prevState;

    const updatedProgress = {
      ...currentEnrollment.progress,
      ...updates,
      lastAccessDate: new Date()
    };

    const updatedEnrollment: UserEnrollment = {
      ...currentEnrollment,
      progress: updatedProgress
    };

    // Update Firestore outside setEnrollmentState (side effect)
    const enrollmentRef = doc(db, 'enrollments', user.uid);
    setDoc(enrollmentRef, {
      ...currentEnrollment,
      progress: updatedProgress,
      updatedAt: serverTimestamp()
    }, { merge: true });

    return {
      ...prevState,
      currentEnrollment: updatedEnrollment
    };
  });
}, [user]);

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