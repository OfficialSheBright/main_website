"use client";
import { CheckCircleIcon, PlayCircleIcon, LockClosedIcon, StarIcon } from "@heroicons/react/24/solid";
import { useEnrollment } from '../hooks/useEnrollment';

interface Topic {
  id: string;
  title: string;
  duration: string;
  completed?: boolean; // Keep this for backward compatibility
}

interface Module {
  id: string;
  title: string;
  topics: Topic[];
}

interface UserProgress {
  courseId: string;
  userId: string;
  completedTopics: string[];
  currentTopic: string;
  overallProgress: number;
  lastAccessed: Date;
  enrollmentDate: Date;
  projectSubmitted?: boolean;
  projectApproved?: boolean;
  projectScore?: number;
  certificateEarned?: boolean;
}

interface ProgressSidebarProps {
  modules: Module[];
  currentTopicId: string;
  userProgress?: UserProgress | null; // Make optional for backward compatibility
  onTopicSelect: (topicId: string) => void;
  courseTitle: string;
}

export default function ProgressSidebar({
  modules = [],
  currentTopicId,
  userProgress, // Old prop (optional)
  onTopicSelect,
  courseTitle
}: ProgressSidebarProps) {
  const { currentEnrollment, updateProgress, loading } = useEnrollment();

  // Combine both data sources for maximum compatibility
  const getCompletedTopics = () => {
    // Priority 1: Firestore enrollment data
    if (currentEnrollment?.progress?.topicsCompleted) {
      return currentEnrollment.progress.topicsCompleted;
    }
    
    // Priority 2: Legacy userProgress prop
    if (userProgress?.completedTopics) {
      return userProgress.completedTopics;
    }
    
    // Priority 3: Topic.completed boolean (oldest format)
    const completedFromTopics = modules
      .flatMap(m => m.topics || [])
      .filter(topic => topic.completed)
      .map(topic => topic.id);
    
    return completedFromTopics;
  };

  const completedTopicsArray = getCompletedTopics();
  
  // Get overall progress from multiple sources
  const getOverallProgress = () => {
    if (currentEnrollment?.progress?.completionPercentage !== undefined) {
      return currentEnrollment.progress.completionPercentage;
    }
    if (userProgress?.overallProgress !== undefined) {
      return userProgress.overallProgress;
    }
    // Calculate from completed topics
    const totalTopics = modules.reduce((acc, m) => acc + (m.topics?.length || 0), 0);
    return totalTopics > 0 ? Math.round((completedTopicsArray.length / totalTopics) * 100) : 0;
  };

  const overallProgress = getOverallProgress();
  const totalTopics = modules.reduce((acc, m) => acc + (m.topics?.length || 0), 0);

  // Check if a topic is completed from any source
  const isTopicCompleted = (topicId: string) => {
    // Check Firestore first
    if (completedTopicsArray.includes(topicId)) {
      return true;
    }
    
    // Check legacy topic.completed boolean
    const topic = modules
      .flatMap(m => m.topics || [])
      .find(t => t.id === topicId);
    
    return topic?.completed || false;
  };

  const getModuleProgress = (module: Module) => {
    if (!module.topics || module.topics.length === 0) return 0;
    const completedTopics = module.topics.filter(topic => isTopicCompleted(topic.id)).length;
    return Math.round((completedTopics / module.topics.length) * 100);
  };

  const isTopicAccessible = (topicId: string) => {
    const allTopics = modules.flatMap(m => m.topics || []);
    const topicIndex = allTopics.findIndex(t => t.id === topicId);
    const currentIndex = allTopics.findIndex(t => t.id === currentTopicId);
    
    // Allow access to current topic and all previous topics, plus next topic if current is completed
    const currentTopicCompleted = isTopicCompleted(currentTopicId);
    const canAccessNext = currentTopicCompleted || topicIndex <= currentIndex + 1;
    
    return topicIndex <= currentIndex || canAccessNext;
  };

  // Handle topic completion toggle - works with Firestore
  const handleTopicComplete = async (topicId: string, event: React.MouseEvent) => {
    event.stopPropagation();

    // If no Firestore enrollment, fall back to local state (but warn user)
    if (!currentEnrollment || !updateProgress) {
      alert('Please ensure you are properly enrolled in this course to save progress.');
      return;
    }

    const isCompleted = isTopicCompleted(topicId);
    let newCompletedTopics;

    if (isCompleted) {
      // Remove from completed
      newCompletedTopics = completedTopicsArray.filter(id => id !== topicId);
    } else {
      // Add to completed
      newCompletedTopics = [...completedTopicsArray, topicId];
    }

    // Calculate new completion percentage
    const newCompletionPercentage = Math.round((newCompletedTopics.length / totalTopics) * 100);

    try {
      // Update progress in Firestore
      await updateProgress({
        topicsCompleted: newCompletedTopics,
        completionPercentage: newCompletionPercentage,
        currentTopic: topicId,
        isCompleted: newCompletionPercentage === 100
      });
    } catch (error) {
      console.error('❌ Error updating progress:', error);
      alert('Failed to save progress. Please try again.');
    }
  };

  // Handle topic selection
  const handleTopicSelect = (topicId: string) => {
    if (isTopicAccessible(topicId)) {
      onTopicSelect(topicId);
      // Update current topic in progress if enrolled
      if (currentEnrollment && updateProgress) {
        updateProgress({
          currentTopic: topicId
        });
      }
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-screen">
        <div className="p-6 border-b border-gray-200 mt-11">
          <div className="animate-pulse space-y-2">
            <div className="h-6 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-2 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 mt-11">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{courseTitle}</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Overall Progress</span>
            <span className="font-semibold text-blue-600">{overallProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${overallProgress}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500">
            {completedTopicsArray.length} of {totalTopics} topics completed
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4">
          {modules.map((module, moduleIndex) => (
            <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Module Header */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    Module {moduleIndex + 1}: {module.title}
                  </h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {getModuleProgress(module)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                  <div
                    className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                    style={{ width: `${getModuleProgress(module)}%` }}
                  ></div>
                </div>
              </div>

              {/* Topics List */}
              <div className="divide-y divide-gray-100">
                {(module.topics || []).map((topic, topicIndex) => {
                  const isAccessible = isTopicAccessible(topic.id);
                  const isCurrent = topic.id === currentTopicId;
                  const isCompleted = isTopicCompleted(topic.id);
                  
                  return (
                    <div
                      key={topic.id}
                      className={`flex items-center transition-all duration-200 ${
                        isCurrent
                          ? 'bg-blue-50 border-r-2 border-blue-500'
                          : isAccessible
                          ? 'hover:bg-gray-50'
                          : 'cursor-not-allowed opacity-60'
                      }`}
                    >
                      {/* Topic Content - Clickable area */}
                      <button
                        onClick={() => handleTopicSelect(topic.id)}
                        disabled={!isAccessible}
                        className="flex-1 px-4 py-3 text-left"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            {isCompleted ? (
                              <CheckCircleIcon className="w-5 h-5 text-green-500" />
                            ) : isCurrent ? (
                              <PlayCircleIcon className="w-5 h-5 text-blue-500" />
                            ) : !isAccessible ? (
                              <LockClosedIcon className="w-5 h-5 text-gray-400" />
                            ) : (
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium truncate ${
                              isCurrent ? 'text-blue-700' : 'text-gray-900'
                            }`}>
                              {topicIndex + 1}. {topic.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{topic.duration}</p>
                          </div>
                        </div>
                      </button>

                      {/* Mark Complete Button - Always show if accessible */}
                      {isAccessible && (
                        <button
                          onClick={(e) => handleTopicComplete(topic.id, e)}
                          className="px-3 py-3 hover:bg-gray-100 transition-colors"
                          title={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
                        >
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            isCompleted 
                              ? 'bg-green-500 border-green-500' 
                              : 'border-gray-300 hover:border-green-400'
                          }`}>
                            {isCompleted && (
                              <CheckCircleIcon className="w-4 h-4 text-white" />
                            )}
                          </div>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Capstone/Certificate Status */}
      <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
        {currentEnrollment?.progress?.isCompleted ? (
          <div className="space-y-2">
            <div className="text-green-700 font-semibold flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-yellow-500" />
              Course Completed!
            </div>
            <div className="text-xs text-green-600 bg-green-50 p-2 rounded-lg border border-green-200">
              🎉 Your certificate will be sent to your email soon!
            </div>
          </div>
        ) : userProgress?.projectSubmitted ? (
          userProgress.projectApproved ? (
            userProgress.projectScore && userProgress.projectScore >= 60 ? (
              <div className="space-y-2">
                <div className="text-green-700 font-semibold flex items-center gap-2">
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  Certificate Earned!
                </div>
                <div className="text-xs text-green-600 bg-green-50 p-2 rounded-lg border border-green-200">
                  📧 Your certificate will be sent to your email soon!
                </div>
              </div>
            ) : (
              <div className="text-red-600 font-semibold">Project score too low for certificate</div>
            )
          ) : (
            <div className="text-blue-600 font-semibold">Project under review</div>
          )
        ) : overallProgress >= 80 ? (
          <div className="text-blue-600 font-semibold">Almost there! Keep going!</div>
        ) : (
          <div className="text-orange-600 font-semibold">Continue learning to unlock certificate</div>
        )}
      </div>

      {/* Footer Stats */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-gray-900">
              {completedTopicsArray.length}
            </div>
            <div className="text-xs text-gray-600">Completed</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">
              {totalTopics - completedTopicsArray.length}
            </div>
            <div className="text-xs text-gray-600">Remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
}