"use client";
import { useState } from "react";
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon, ClockIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import TopicContent from "./TopicContent";

interface Topic {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked?: boolean; // Add locked property
}

interface UserProgress {
  courseId: string;
  userId: string;
  completedTopics: string[];
  currentTopic: string;
  overallProgress: number;
  lastAccessed: Date;
  enrollmentDate: Date;
}

interface CourseContentProps {
  currentTopic: Topic | undefined;
  nextTopic: Topic | null;
  previousTopic: Topic | null;
  onTopicComplete: (topicId: string) => void;
  onNavigateToTopic: (topicId: string) => void;
  userProgress: UserProgress | null;
  courseId: string;
}

export default function CourseContent({
  currentTopic,
  nextTopic,
  previousTopic,
  onTopicComplete,
  onNavigateToTopic,
  userProgress,
  courseId
}: CourseContentProps) {
  const [showCompleteConfirm, setShowCompleteConfirm] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false); // Add loading state

  if (!currentTopic) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">No topic selected</h2>
          <p className="text-gray-600 mt-2">Please select a topic from the sidebar to begin learning.</p>
        </div>
      </div>
    );
  }

  const isCompleted = currentTopic.completed;
 // const isNextTopicLocked = nextTopic?.locked;

  const handleMarkComplete = () => {
    if (!isCompleted && !isCompleting) {
      setShowCompleteConfirm(true);
    }
  };

  const confirmComplete = async () => {
    setIsCompleting(true);
    try {
      await onTopicComplete(currentTopic.id);
      setShowCompleteConfirm(false);
      
      // Auto-navigate to next topic after completion if it's unlocked
      if (nextTopic && !nextTopic.locked) {
        setTimeout(() => {
          onNavigateToTopic(nextTopic.id);
        }, 1500);
      }
    } catch (error) {
      console.error("Error completing topic:", error);
      // Show error message to user
      alert("Failed to mark topic as complete. Please try again.");
    } finally {
      setIsCompleting(false);
    }
  };

  const handleNextTopic = () => {
    if (nextTopic && !nextTopic.locked) {
      onNavigateToTopic(nextTopic.id);
    } else if (nextTopic?.locked) {
      alert("Please complete the current topic first to unlock the next one!");
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Topic Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{currentTopic.title}</h1>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>{currentTopic.duration}</span>
              </div>
              {isCompleted && (
                <div className="flex items-center text-green-600">
                  <CheckIcon className="w-4 h-4 mr-1" />
                  <span>Completed</span>
                </div>
              )}
              {userProgress && (
                <div className="flex items-center text-blue-600">
                  <span>Progress: {userProgress.overallProgress}%</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => previousTopic && onNavigateToTopic(previousTopic.id)}
              disabled={!previousTopic}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                previousTopic
                  ? 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                  : 'text-gray-400 bg-gray-50 cursor-not-allowed'
              }`}
            >
              <ChevronLeftIcon className="w-4 h-4 mr-1" />
              Previous
            </button>

            {!isCompleted ? (
              <button
                onClick={handleMarkComplete}
                disabled={isCompleting}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  isCompleting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isCompleting ? 'Completing...' : 'Mark as Complete'}
              </button>
            ) : (
              <button
                onClick={handleNextTopic}
                disabled={!nextTopic}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                  !nextTopic
                    ? 'text-gray-400 bg-gray-50 cursor-not-allowed'
                    : nextTopic.locked
                    ? 'text-gray-500 bg-gray-200 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {nextTopic?.locked ? (
                  <>
                    <LockClosedIcon className="w-4 h-4 mr-1" />
                    Locked
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRightIcon className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Topic Content */}
      <div className="flex-1 overflow-y-auto">
        <TopicContent topicId={currentTopic.id} courseId={courseId} />
      </div>

      {/* Completion Confirmation Modal */}
      {showCompleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Mark Topic as Complete?
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to mark &quot;{currentTopic.title}&quot; as completed? 
              This will update your progress and unlock the next topic.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowCompleteConfirm(false)}
                disabled={isCompleting}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmComplete}
                disabled={isCompleting}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                {isCompleting ? 'Completing...' : 'Mark Complete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}