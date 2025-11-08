"use client";
import { useState } from "react";
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon, ClockIcon } from "@heroicons/react/24/outline";
import TopicContent from "./TopicContent";

interface Topic {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
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

  const handleMarkComplete = () => {
    if (!isCompleted) {
      setShowCompleteConfirm(true);
    }
  };

  const confirmComplete = () => {
    onTopicComplete(currentTopic.id);
    setShowCompleteConfirm(false);
    
    // Auto-navigate to next topic after completion
    if (nextTopic) {
      setTimeout(() => {
        onNavigateToTopic(nextTopic.id);
      }, 1500);
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
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Mark as Complete
              </button>
            ) : (
              <button
                onClick={() => nextTopic && onNavigateToTopic(nextTopic.id)}
                disabled={!nextTopic}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                  nextTopic
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'text-gray-400 bg-gray-50 cursor-not-allowed'
                }`}
              >
                Next
                <ChevronRightIcon className="w-4 h-4 ml-1" />
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
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-sm">
    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Mark Topic as Complete?
      </h3>
      <p className="text-gray-600 mb-6">
        Are you sure you want to mark &quot;{currentTopic.title}&quot; as completed? This will update your progress and unlock the next topic.
      </p>
      <div className="flex space-x-3">
        <button
          onClick={() => setShowCompleteConfirm(false)}
          className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={confirmComplete}
          className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Mark Complete
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}