// "use client";

// import { 
//   UserEnrollment, 
//   CourseEnrollmentState, 
//   EnrollmentAction,
//   UserProgress 
// } from '../types/course';

// // Storage keys
// export const STORAGE_KEYS = {
//   ENROLLMENT: 'shebright_enrollment',
//   ENROLLMENT_HISTORY: 'shebright_enrollment_history',
//   ENROLLMENT_ACTIONS: 'shebright_enrollment_actions',
//   USER_PROGRESS: 'shebright_user_progress',
//   COURSE_PREFERENCES: 'shebright_course_preferences'
// } as const;

// // Enrollment Storage Functions
// export class EnrollmentStorage {
//   // Save current enrollment
//   static saveCurrentEnrollment(enrollment: UserEnrollment | null): void {
//     try {
//       if (enrollment) {
//         localStorage.setItem(STORAGE_KEYS.ENROLLMENT, JSON.stringify(enrollment));
//       } else {
//         localStorage.removeItem(STORAGE_KEYS.ENROLLMENT);
//       }
//     } catch (error) {
//       console.error('Failed to save current enrollment:', error);
//     }
//   }

//   // Load current enrollment
//   static loadCurrentEnrollment(): UserEnrollment | null {
//     try {
//       const saved = localStorage.getItem(STORAGE_KEYS.ENROLLMENT);
//       if (!saved) return null;

//       const enrollment: UserEnrollment = JSON.parse(saved);
      
//       // Convert date strings back to Date objects
//       enrollment.enrollmentDate = new Date(enrollment.enrollmentDate);
//       if (enrollment.completionDate) {
//         enrollment.completionDate = new Date(enrollment.completionDate);
//       }
//       enrollment.progress.startDate = new Date(enrollment.progress.startDate);
//       enrollment.progress.lastAccessDate = new Date(enrollment.progress.lastAccessDate);
//       if (enrollment.progress.completionDate) {
//         enrollment.progress.completionDate = new Date(enrollment.progress.completionDate);
//       }

//       return enrollment;
//     } catch (error) {
//       console.error('Failed to load current enrollment:', error);
//       return null;
//     }
//   }

//   // Save enrollment history
//   static saveEnrollmentHistory(history: UserEnrollment[]): void {
//     try {
//       localStorage.setItem(STORAGE_KEYS.ENROLLMENT_HISTORY, JSON.stringify(history));
//     } catch (error) {
//       console.error('Failed to save enrollment history:', error);
//     }
//   }

//   // Load enrollment history
//   static loadEnrollmentHistory(): UserEnrollment[] {
//     try {
//       const saved = localStorage.getItem(STORAGE_KEYS.ENROLLMENT_HISTORY);
//       if (!saved) return [];

//       const history: UserEnrollment[] = JSON.parse(saved);
      
//       // Convert date strings back to Date objects for each enrollment
//       return history.map(enrollment => ({
//         ...enrollment,
//         enrollmentDate: new Date(enrollment.enrollmentDate),
//         completionDate: enrollment.completionDate ? new Date(enrollment.completionDate) : undefined,
//         progress: {
//           ...enrollment.progress,
//           startDate: new Date(enrollment.progress.startDate),
//           lastAccessDate: new Date(enrollment.progress.lastAccessDate),
//           completionDate: enrollment.progress.completionDate 
//             ? new Date(enrollment.progress.completionDate) 
//             : undefined
//         }
//       }));
//     } catch (error) {
//       console.error('Failed to load enrollment history:', error);
//       return [];
//     }
//   }

//   // Save enrollment action log
//   static saveEnrollmentAction(action: EnrollmentAction): void {
//     try {
//       const existing = this.loadEnrollmentActions();
//       const updated = [...existing, action];
//       localStorage.setItem(STORAGE_KEYS.ENROLLMENT_ACTIONS, JSON.stringify(updated));
//     } catch (error) {
//       console.error('Failed to save enrollment action:', error);
//     }
//   }

//   // Load enrollment actions
//   static loadEnrollmentActions(): EnrollmentAction[] {
//     try {
//       const saved = localStorage.getItem(STORAGE_KEYS.ENROLLMENT_ACTIONS);
//       if (!saved) return [];

//       const actions: EnrollmentAction[] = JSON.parse(saved);
//       return actions.map(action => ({
//         ...action,
//         timestamp: new Date(action.timestamp)
//       }));
//     } catch (error) {
//       console.error('Failed to load enrollment actions:', error);
//       return [];
//     }
//   }

//   // Clear all enrollment data
//   static clearAllEnrollmentData(): void {
//     try {
//       localStorage.removeItem(STORAGE_KEYS.ENROLLMENT);
//       localStorage.removeItem(STORAGE_KEYS.ENROLLMENT_HISTORY);
//       localStorage.removeItem(STORAGE_KEYS.ENROLLMENT_ACTIONS);
//     } catch (error) {
//       console.error('Failed to clear enrollment data:', error);
//     }
//   }

//   // Get complete enrollment state
//   static loadCompleteEnrollmentState(): CourseEnrollmentState {
//     const currentEnrollment = this.loadCurrentEnrollment();
//     const enrollmentHistory = this.loadEnrollmentHistory();

//     return {
//       currentEnrollment,
//       isEnrolled: !!currentEnrollment,
//       canEnrollInOther: !currentEnrollment,
//       enrollmentHistory
//     };
//   }

//   // Save complete enrollment state
//   static saveCompleteEnrollmentState(state: CourseEnrollmentState): void {
//     this.saveCurrentEnrollment(state.currentEnrollment);
//     this.saveEnrollmentHistory(state.enrollmentHistory);
//   }
// }

// // Progress Storage Functions
// export class ProgressStorage {
//   // Save user progress for a specific course
//   static saveUserProgress(courseId: string, progress: UserProgress): void {
//     try {
//       const allProgress = this.loadAllUserProgress();
//       allProgress[courseId] = progress;
//       localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(allProgress));
//     } catch (error) {
//       console.error('Failed to save user progress:', error);
//     }
//   }

//   // Load user progress for a specific course
//   static loadUserProgress(courseId: string): UserProgress | null {
//     try {
//       const allProgress = this.loadAllUserProgress();
//       const progress = allProgress[courseId];
      
//       if (!progress) return null;

//       // Convert date strings back to Date objects
//       return {
//         ...progress,
//         startDate: new Date(progress.startDate),
//         lastAccessDate: new Date(progress.lastAccessDate),
//         completionDate: progress.completionDate ? new Date(progress.completionDate) : undefined
//       };
//     } catch (error) {
//       console.error('Failed to load user progress:', error);
//       return null;
//     }
//   }

//   // Load all user progress
//   static loadAllUserProgress(): Record<string, UserProgress> {
//     try {
//       const saved = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
//       return saved ? JSON.parse(saved) : {};
//     } catch (error) {
//       console.error('Failed to load all user progress:', error);
//       return {};
//     }
//   }

//   // Clear progress for a specific course
//   static clearUserProgress(courseId: string): void {
//     try {
//       const allProgress = this.loadAllUserProgress();
//       delete allProgress[courseId];
//       localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(allProgress));
//     } catch (error) {
//       console.error('Failed to clear user progress:', error);
//     }
//   }
// }

// // General Storage Utilities
// export class StorageUtils {
//   // Check if localStorage is available
//   static isStorageAvailable(): boolean {
//     try {
//       const test = '__storage_test__';
//       localStorage.setItem(test, test);
//       localStorage.removeItem(test);
//       return true;
//     } catch {
//       return false;
//     }
//   }

//   // Get storage usage info
//   static getStorageInfo(): { used: number; total: number; available: number } {
//     if (!this.isStorageAvailable()) {
//       return { used: 0, total: 0, available: 0 };
//     }

//     let used = 0;
//     for (let key in localStorage) {
//       if (localStorage.hasOwnProperty(key)) {
//         used += localStorage[key].length;
//       }
//     }

//     // Most browsers limit localStorage to ~5-10MB
//     const total = 5 * 1024 * 1024; // 5MB estimate
//     const available = total - used;

//     return { used, total, available };
//   }

//   // Export all course data
//   static exportCourseData(): string {
//     const data = {
//       enrollment: EnrollmentStorage.loadCompleteEnrollmentState(),
//       progress: ProgressStorage.loadAllUserProgress(),
//       actions: EnrollmentStorage.loadEnrollmentActions(),
//       exportDate: new Date().toISOString(),
//       version: '1.0'
//     };

//     return JSON.stringify(data, null, 2);
//   }

//   // Import course data
//   static importCourseData(jsonData: string): { success: boolean; message: string } {
//     try {
//       const data = JSON.parse(jsonData);
      
//       if (!data.enrollment || !data.progress) {
//         return { success: false, message: 'Invalid data format' };
//       }

//       // Clear existing data
//       EnrollmentStorage.clearAllEnrollmentData();
      
//       // Import enrollment data
//       EnrollmentStorage.saveCompleteEnrollmentState(data.enrollment);
      
//       // Import progress data
//       const progressData = data.progress;
//       localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(progressData));
      
//       // Import actions if available
//       if (data.actions) {
//         localStorage.setItem(STORAGE_KEYS.ENROLLMENT_ACTIONS, JSON.stringify(data.actions));
//       }

//       return { success: true, message: 'Data imported successfully' };
//     } catch (error) {
//       console.error('Failed to import course data:', error);
//       return { success: false, message: 'Failed to import data' };
//     }
//   }

//   // Clear all course-related data
//   static clearAllCourseData(): void {
//     EnrollmentStorage.clearAllEnrollmentData();
//     localStorage.removeItem(STORAGE_KEYS.USER_PROGRESS);
//     localStorage.removeItem(STORAGE_KEYS.COURSE_PREFERENCES);
//   }
// }

// // Migration utilities for future updates
// export class StorageMigration {
//   private static readonly CURRENT_VERSION = '1.0';
//   private static readonly VERSION_KEY = 'shebright_storage_version';

//   // Check if migration is needed
//   static needsMigration(): boolean {
//     const currentVersion = localStorage.getItem(this.VERSION_KEY);
//     return currentVersion !== this.CURRENT_VERSION;
//   }

//   // Run migration if needed
//   static runMigrationIfNeeded(): void {
//     if (this.needsMigration()) {
//       this.migrate();
//     }
//   }

//   // Perform migration
//   private static migrate(): void {
//     try {
//       // Future migration logic will go here
//       // For now, just set the version
//       localStorage.setItem(this.VERSION_KEY, this.CURRENT_VERSION);
//       console.log('Storage migration completed successfully');
//     } catch (error) {
//       console.error('Storage migration failed:', error);
//     }
//   }
// }