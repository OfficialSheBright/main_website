"use client";
import { CheckCircleIcon, PlayCircleIcon, LockClosedIcon, StarIcon } from "@heroicons/react/24/solid";

interface Topic {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
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
  userProgress: UserProgress | null;
  onTopicSelect: (topicId: string) => void;
  courseTitle: string;
}

export default function ProgressSidebar({
  modules,
  currentTopicId,
  userProgress,
  onTopicSelect,
  courseTitle
}: ProgressSidebarProps) {
  const getModuleProgress = (module: Module) => {
    const completedTopics = module.topics.filter(topic => topic.completed).length;
    return Math.round((completedTopics / module.topics.length) * 100);
  };

  const isTopicAccessible = (topicId: string) => {
    const allTopics = modules.flatMap(m => m.topics);
    const topicIndex = allTopics.findIndex(t => t.id === topicId);
    const currentIndex = allTopics.findIndex(t => t.id === currentTopicId);
    
    // Allow access to current topic and all previous topics, plus next topic if current is completed
    const currentTopic = allTopics.find(t => t.id === currentTopicId);
    const canAccessNext = currentTopic?.completed || topicIndex <= currentIndex + 1;
    
    return topicIndex <= currentIndex || canAccessNext;
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{courseTitle}</h2>
        {userProgress && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Overall Progress</span>
              <span className="font-semibold text-blue-600">{userProgress.overallProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${userProgress.overallProgress}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500">
              {userProgress.completedTopics.length} of {modules.reduce((acc, m) => acc + m.topics.length, 0)} topics completed
            </div>
          </div>
        )}
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
                {module.topics.map((topic, topicIndex) => {
                  const isAccessible = isTopicAccessible(topic.id);
                  const isCurrent = topic.id === currentTopicId;
                  
                  return (
                    <button
                      key={topic.id}
                      onClick={() => isAccessible && onTopicSelect(topic.id)}
                      disabled={!isAccessible}
                      className={`w-full px-4 py-3 text-left transition-all duration-200 ${
                        isCurrent
                          ? 'bg-blue-50 border-r-2 border-blue-500'
                          : isAccessible
                          ? 'hover:bg-gray-50'
                          : 'cursor-not-allowed opacity-60'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          {topic.completed ? (
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
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

       {/* Capstone/Certificate Status */}
  <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
    {userProgress?.projectSubmitted ? (
      userProgress.projectApproved ? (
        userProgress.projectScore && userProgress.projectScore >= 60 ? (
          <div className="text-green-700 font-semibold flex items-center gap-2">
            <StarIcon className="w-5 h-5 text-yellow-500" />
            Certificate Earned!
          </div>
        ) : (
          <div className="text-red-600 font-semibold">Project score too low for certificate</div>
        )
      ) : (
        <div className="text-blue-600 font-semibold">Project under review</div>
      )
    ) : (
      <div className="text-orange-600 font-semibold">Submit capstone project to complete course</div>
    )}
  </div>

      {/* Footer Stats */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-gray-900">
              {userProgress?.completedTopics.length || 0}
            </div>
            <div className="text-xs text-gray-600">Completed</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">
              {modules.reduce((acc, m) => acc + m.topics.length, 0) - (userProgress?.completedTopics.length || 0)}
            </div>
            <div className="text-xs text-gray-600">Remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
}