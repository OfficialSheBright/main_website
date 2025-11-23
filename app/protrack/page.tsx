"use client";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useEnrollment } from "../../hooks/useEnrollment";
import { EnrollmentModal } from "../../components/EnrollmentModal";
import { UnenrollmentModal } from "../../components/UnenrollmentModal";
import { CourseConfig } from "../../lib/course-configs";

// Import your course configurations
import {
  aiMLConfig,
  webDevelopmentConfig,
  mobileDevelopmentConfig,
  dataCloudConfig,
  cybersecurityConfig,
  blockchainWeb3Config,
  designCreativeConfig,
  gameDevelopmentConfig,
  productProjectConfig,
  softwareEngineeringConfig
} from "../../lib/course-configs";

// Course registry
const courseConfigs: Record<string, CourseConfig> = {
  "ai-ml": aiMLConfig,
  "web-development": webDevelopmentConfig,
  "mobile-development": mobileDevelopmentConfig,
  "data-cloud": dataCloudConfig,
  "cybersecurity": cybersecurityConfig,
  "blockchain-web3": blockchainWeb3Config,
  "design-creative": designCreativeConfig,
  "game-development": gameDevelopmentConfig,
  "product-project": productProjectConfig,
  "software-engineering": softwareEngineeringConfig,
};

export default function ProTrackDashboard() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  
  // Enrollment management
  const {
  //  enrollmentState,
    currentEnrollment,
    isEnrolled,
    enrollInCourse,
    unenrollFromCourse,
    validateEnrollment,
    getCourseAvailability,
    loading: enrollmentLoading
  } = useEnrollment();

  // Modal states
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [showUnenrollmentModal, setShowUnenrollmentModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseConfig | null>(null);
  // Define a type for enrollment validation result
  type EnrollmentValidation = ReturnType<typeof validateEnrollment>;
  const [enrollmentValidation, setEnrollmentValidation] = useState<EnrollmentValidation | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [showCourseDetails, setShowCourseDetails] = useState<string | null>(null);

  // Get all courses
  const courses = Object.values(courseConfigs);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
      return;
    }
  }, [user, loading, router]);

  // Handle course enrollment
  const handleEnrollClick = (course: CourseConfig) => {
    const validation = validateEnrollment(course.id);
    setSelectedCourse(course);
    setEnrollmentValidation(validation);
    setShowEnrollmentModal(true);
  };

  // Handle unenrollment
  const handleUnenrollClick = () => {
    if (currentEnrollment) {
      setShowUnenrollmentModal(true);
    }
  };

  // Confirm enrollment
  const handleConfirmEnrollment = async () => {
    if (!selectedCourse) return;
    
    setActionLoading(true);
    try {
      const result = await enrollInCourse(selectedCourse);
      if (result.success) {
        setShowEnrollmentModal(false);
        setSelectedCourse(null);
        setShowCourseDetails(null);
        // Show success message (you can add a toast here)
        console.log(result.message);
      } else {
        // Show error message
        console.error(result.message);
      }
    } catch (error) {
      console.error('Enrollment failed:', error);
    } finally {
      setActionLoading(false);
    }
  };

  // Confirm unenrollment
  const handleConfirmUnenrollment = async () => {
    setActionLoading(true);
    try {
      const result = await unenrollFromCourse();
      if (result.success) {
        setShowUnenrollmentModal(false);
        // Show success message
        console.log(result.message);
      } else {
        // Show error message
        console.error(result.message);
      }
    } catch (error) {
      console.error('Unenrollment failed:', error);
    } finally {
      setActionLoading(false);
    }
  };

  // Get course display status
  const getCourseDisplayInfo = (course: CourseConfig) => {
    const availability = getCourseAvailability(course.id);
    const isCurrentCourse = currentEnrollment?.courseId === course.id;
    
    return {
      isAvailable: availability.isAvailable,
      isLocked: availability.isLocked,
      isEnrolled: isCurrentCourse,
      progress: isCurrentCourse ? currentEnrollment.progress.completionPercentage : 0,
      completedTopics: isCurrentCourse ? currentEnrollment.progress.topicsCompleted.length : 0,
      lockReason: availability.lockReason
    };
  };

  if (loading || enrollmentLoading) {
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
    <div className="min-h-screen bg-gray-50 relative">
      {/* Main Content - Apply blur when any modal is open */}
      <div className={`transition-all duration-300 ${
        (showEnrollmentModal || showUnenrollmentModal || showCourseDetails) 
          ? 'blur-sm scale-[0.98] brightness-75' 
          : ''
      }`}>
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
              
              {/* Enrollment Status Banner */}
              {isEnrolled && currentEnrollment && (
                <div className="bg-blue-800 bg-opacity-20 rounded-lg p-4 max-w-md mx-auto mt-6">
                  <p className="text-sm opacity-90 mb-2">Currently enrolled in:</p>
                  <p className="font-semibold text-lg">{currentEnrollment.courseName}</p>
                  <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mt-2">
                    <div 
                      className="bg-white h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${currentEnrollment.progress.completionPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs opacity-80 mt-1">
                    {currentEnrollment.progress.completionPercentage}% complete
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* My Current Course Section */}
        {isEnrolled && currentEnrollment && (
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">My Current Course</h2>
              <button
                onClick={handleUnenrollClick}
                className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm"
              >
                Unenroll
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-blue-500">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{currentEnrollment.courseName}</h3>
                  <span className="text-sm text-gray-500">{currentEnrollment.progress.completionPercentage}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div 
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300" 
                    style={{ width: `${currentEnrollment.progress.completionPercentage}%` }}
                  ></div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {currentEnrollment.progress.topicsCompleted.length} topics completed
                </p>
                
                <div className="flex space-x-3">
                  <Link 
                    href={`/protrack/${currentEnrollment.courseId}`}
                    className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Continue Learning
                  </Link>
                  <Link 
                    href={`/profile`}
                    className="bg-gray-100 text-gray-700 py-2 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    View Progress
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Enrollment Policy Notice */}
        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="text-blue-600 mt-0.5 mr-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-sm">
                <p className="text-blue-800 font-semibold">One Course Policy:</p>
                <p className="text-blue-700 mt-1">
                  You can only be enrolled in one course at a time to ensure focused learning. 
                  {isEnrolled 
                    ? ' Other courses are currently locked. Complete or unenroll from your current course to access others.'
                    : ' Choose your course carefully as other courses will be locked once you enroll.'
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

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
              const displayInfo = getCourseDisplayInfo(course);
              
              return (
                <div 
                  key={course.id} 
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group relative ${
                    displayInfo.isLocked ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl cursor-pointer'
                  }`}
                >
                  {/* Short Lock Overlay */}
                  {displayInfo.isLocked && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        Locked
                      </div>
                    </div>
                  )}
                  
                  {/* Course Header */}
                  <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 text-white relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        course.difficulty === 'Beginner' ? 'bg-green-500 text-white' :
                        course.difficulty === 'Intermediate' ? 'bg-yellow-500 text-white' :
                        'bg-red-500 text-white'
                      }`}>
                        {course.difficulty}
                      </span>
                      <span className="text-sm text-gray-300">{course.totalHours}h</span>
                    </div>
                    
                    {displayInfo.isEnrolled && (
                      <div className="mb-2">
                        <div className="flex items-center justify-between text-sm text-gray-300">
                          <span>Progress</span>
                          <span>{displayInfo.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1 mt-1">
                          <div 
                            className="bg-green-400 h-1 rounded-full transition-all duration-300" 
                            style={{ width: `${displayInfo.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-2 text-white">{course.title}</h3>
                    <p className="text-sm text-gray-300">{course.description}</p>
                  </div>

                  {/* Course Details */}
                  <div className="p-6">
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{course.modules.length}</div>
                        <div className="text-sm text-gray-600">Modules</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          {course.modules.reduce((acc, module) => acc + module.topics.length, 0)}
                        </div>
                        <div className="text-sm text-gray-600">Topics</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    {course.technologiesCovered && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Covered</h4>
                        <div className="flex flex-wrap gap-2">
                          {course.technologiesCovered.slice(0, 6).map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {tech}
                            </span>
                          ))}
                          {course.technologiesCovered.length > 6 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              +{course.technologiesCovered.length - 6} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <button
                      onClick={() => {
                        if (displayInfo.isLocked) return;
                        if (displayInfo.isEnrolled) {
                          router.push(`/protrack/${course.id}`);
                        } else {
                          setShowCourseDetails(course.id);
                        }
                      }}
                      disabled={displayInfo.isLocked}
                      className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                        displayInfo.isLocked
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : displayInfo.isEnrolled 
                            ? 'bg-green-600 hover:bg-green-700 text-white hover:shadow-lg group-hover:scale-105' 
                            : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:shadow-lg group-hover:scale-105'
                      }`}
                    >
                      {displayInfo.isLocked 
                        ? 'Course Locked'
                        : displayInfo.isEnrolled 
                          ? 'Continue Learning' 
                          : 'View Details'
                      }
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Modal Overlay - Completely transparent, no backdrop blur */}
      {(showEnrollmentModal || showUnenrollmentModal || showCourseDetails) && (
        <div className="fixed inset-0 z-[60]"></div>
      )}

      {/* Course Details Modal - Fixed z-index to be above navbar */}
      {showCourseDetails && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const course = courseConfigs[showCourseDetails];
              if (!course) return null;
              
              return (
                <>
                  {/* Header - Changed from black to blue gradient */}
                  <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold">{course.title}</h2>
                      <button
                        onClick={() => setShowCourseDetails(null)}
                        className="text-gray-200 hover:text-white"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-200 mb-4">{course.description}</p>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        course.difficulty === 'Beginner' ? 'bg-green-500 text-white' :
                        course.difficulty === 'Intermediate' ? 'bg-yellow-500 text-white' :
                        'bg-red-500 text-white'
                      }`}>
                        {course.difficulty}
                      </span>
                      <span className="text-sm text-gray-200">{course.totalHours} hours</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-white">
                    {/* Course Modules */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Course Modules</h3>
                      <div className="space-y-4">
                        {course.modules.map((module, moduleIndex) => (
                          <div key={moduleIndex} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                            <h4 className="font-semibold text-gray-900 mb-2">{module.title}</h4>
                            <p className="text-gray-600 text-sm mb-3">{module.description}</p>
                            <div className="space-y-2">
                              {module.topics.map((topic, topicIndex) => (
                                <div key={topicIndex} className="flex items-center text-sm text-gray-700">
                                  <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-gray-800">{topic.title}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    {course.technologiesCovered && (
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies You&apos;ll Learn</h3>
                        <div className="flex flex-wrap gap-3">
                          {course.technologiesCovered.map((tech, index) => (
                            <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-lg font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                      <button
                        onClick={() => setShowCourseDetails(null)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleEnrollClick(course)}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:shadow-lg transition-all font-medium"
                      >
                        Enroll in Course
                      </button>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Enrollment Modal - Fixed z-index */}
      {showEnrollmentModal && selectedCourse && enrollmentValidation && (
        <div className="fixed inset-0 z-70 flex items-center justify-center p-4">
          <EnrollmentModal
            isOpen={showEnrollmentModal}
            course={selectedCourse}
            validation={enrollmentValidation}
            currentEnrollment={currentEnrollment ?? undefined}
            onConfirm={handleConfirmEnrollment}
            onCancel={() => {
              setShowEnrollmentModal(false);
              setSelectedCourse(null);
              setEnrollmentValidation(null);
            }}
            loading={actionLoading}
          />
        </div>
      )}

      {/* Unenrollment Modal - Fixed z-index */}
      {showUnenrollmentModal && currentEnrollment && (
        <div className="fixed inset-0 z-70 flex items-center justify-center p-4">
          <UnenrollmentModal
            isOpen={showUnenrollmentModal}
            enrollment={currentEnrollment}
            onConfirm={handleConfirmUnenrollment}
            onCancel={() => setShowUnenrollmentModal(false)}
            loading={actionLoading}
          />
        </div>
      )}
    </div>
  );
}