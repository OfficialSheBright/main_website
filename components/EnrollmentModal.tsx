"use client";
import React from 'react';
import { CourseConfig } from '../lib/course-configs';
import { EnrollmentValidation, UserEnrollment } from '../types/course';

interface EnrollmentModalProps {
  isOpen: boolean;
  course: CourseConfig;
  validation: EnrollmentValidation;
  currentEnrollment?: UserEnrollment;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
}

export function EnrollmentModal({
  isOpen,
  course,
  validation,
  currentEnrollment,
  onConfirm,
  onCancel,
  loading = false
}: EnrollmentModalProps) {
  if (!isOpen) return null;

  const renderModalContent = () => {
    // Case 1: Already enrolled in the same course
    if (validation.reason === 'ALREADY_ENROLLED_IN_SAME_COURSE') {
      return (
        <>
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Already Enrolled</h3>
            <p className="text-gray-600">
              You are already enrolled in &quot;{course.title}&quot;. 
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <div className="text-blue-600 mt-0.5 mr-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-sm">
                <p className="text-blue-800 font-semibold">Progress: {currentEnrollment?.progress.completionPercentage || 0}%</p>
                <p className="text-blue-700 mt-1">Continue learning where you left off!</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={onCancel}
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => window.location.href = `/courses/${course.id}`}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue Learning
            </button>
          </div>
        </>
      );
    }

    // Case 2: Enrolled in different course
    if (validation.reason === 'ALREADY_ENROLLED_IN_OTHER_COURSE' && currentEnrollment) {
      return (
        <>
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Switch Course?</h3>
            <p className="text-gray-600">
              You are currently enrolled in &quot;{currentEnrollment.courseName}&quot;.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <div className="text-yellow-600 mt-0.5 mr-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-sm">
                <p className="text-yellow-800 font-semibold">Important:</p>
                <p className="text-yellow-700 mt-1">
                  You can only be enrolled in one course at a time. Switching will unenroll you from your current course.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Current Progress:</h4>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="font-semibold">{currentEnrollment.progress.completionPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${currentEnrollment.progress.completionPercentage}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-gray-600">Topics Completed</span>
              <span className="font-semibold">{currentEnrollment.progress.topicsCompleted.length}</span>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={onCancel}
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={loading}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Switching...' : 'Switch Course'}
            </button>
          </div>
        </>
      );
    }

    // Case 3: First time enrollment
    return (
      <>
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Enroll in Course</h3>
          <p className="text-gray-600">
            Ready to start your learning journey with &quot;{course.title}&quot;?
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <div className="text-blue-600 mt-0.5 mr-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-sm">
              <p className="text-blue-800 font-semibold">One Course Policy:</p>
              <p className="text-blue-700 mt-1">
                You can only be enrolled in one course at a time. Once enrolled, other courses will be locked until you complete or unenroll from this course.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Course Overview:</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Duration</span>
              <span className="font-semibold">{course.totalHours} hours</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Modules</span>
              <span className="font-semibold">{course.modules.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Difficulty</span>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {course.difficulty}
              </span>
            </div>
            {course.certification?.available && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Certificate</span>
                <span className="text-green-600 font-semibold">Available</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Enrolling...' : 'Enroll Now'}
          </button>
        </div>
      </>
    );
  };

  return (
    // Removed the dark background overlay - parent handles it now
    <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        {renderModalContent()}
      </div>
    </div>
  );
}