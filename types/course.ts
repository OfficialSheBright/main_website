export interface Topic {
  id: string;
  title: string;
  description: string;
  estimatedTime: number;
  completed: boolean;
  locked: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedHours: number;
  topics: Topic[];
  thumbnail?: string;
  isPro?: boolean;
}

export interface UserProgress {
  courseId: string;
  topicsCompleted: string[];
  currentTopic: string | null;
  completionPercentage: number;
  startDate: Date;
  lastAccessDate: Date;
  completionDate?: Date;
  isCompleted: boolean;
   userId: string;
  completedTopics: string[];
  overallProgress: number;
  lastAccessed: Date;
  enrollmentDate: Date;
}

// New enrollment types
export interface UserEnrollment {
  courseId: string;
  courseName: string;
  enrollmentDate: Date;
  canUnenroll: boolean; // false if course is completed
  completionDate?: Date;
  progress: UserProgress;
}

export interface CourseEnrollmentState {
  currentEnrollment: UserEnrollment | null;
  isEnrolled: boolean;
  canEnrollInOther: boolean;
  enrollmentHistory: UserEnrollment[];
}

export interface EnrollmentAction {
  type: 'ENROLL' | 'UNENROLL' | 'COMPLETE';
  courseId: string;
  courseName: string;
  timestamp: Date;
  canUndo: boolean;
}

// Enrollment validation result
export interface EnrollmentValidation {
  canEnroll: boolean;
  reason?: string;
  currentEnrollment?: UserEnrollment;
  requiresConfirmation: boolean;
  warningMessage?: string;
}

// Course availability status
export interface CourseAvailability {
  courseId: string;
  isAvailable: boolean;
  isLocked: boolean;
  lockReason?: 'ALREADY_ENROLLED' | 'COURSE_IN_PROGRESS' | 'PRO_REQUIRED';
  canPreview: boolean;
}

// Enrollment modal props
export interface EnrollmentModalData {
  course: Course;
  currentEnrollment?: UserEnrollment;
  validation: EnrollmentValidation;
  onConfirm: () => void;
  onCancel: () => void;
}

// Unenrollment confirmation data
export interface UnenrollmentData {
  courseId: string;
  courseName: string;
  progress: number;
  completedTopics: number;
  totalTopics: number;
  canUnenroll: boolean;
  warningMessage: string;
}