"use client";
import { useState, useEffect } from "react";
import { webDevelopmentContent, getTopicContent as getWebDevContent } from "@/lib/course-content/web-development";
import { blockchainWeb3Content, getTopicContent as getBlockchainContent } from "@/lib/course-content/blockchain-web3";
import { mobileDevelopmentContent, getTopicContent as getMobileContent } from "@/lib/course-content/mobile-development";
import { aiMLContent, getTopicContent as getAIContent } from "@/lib/course-content/ai-ml";
import { dataCloudContent, getTopicContent as getDataCloudContent } from "@/lib/course-content/data-cloud";
import { cybersecurityContent, getTopicContent as getCyberContent } from "@/lib/course-content/cybersecurity";
import { softwareEngineeringContent, getTopicContent as getSoftwareContent } from "@/lib/course-content/software-engineering";
import { designCreativeContent, getTopicContent as getDesignContent } from "@/lib/course-content/design-creative";
import { gameDevelopmentContent, getTopicContent as getGameContent } from "@/lib/course-content/game-development";
import { productProjectContent, getTopicContent as getProductContent } from "@/lib/course-content/product-project";
import { doc, setDoc, getDoc, serverTimestamp, Timestamp, FieldValue } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";

interface TopicContentProps {
  topicId: string;
  courseId: string;
}

interface TopicProgress {
  timeSpent: number;
  lastAccessed: Timestamp | FieldValue;
  completed: boolean;
  interactions: Record<string, { [key: string]: unknown; timestamp?: Timestamp | FieldValue }>;
  userId: string;
  courseId: string;
  topicId: string;
}

export default function TopicContent({ topicId, courseId }: TopicContentProps) {
  const [user] = useAuthState(auth);
  const [topicProgress, setTopicProgress] = useState<TopicProgress | null>(null);
  const [startTime] = useState(() => Date.now());

  // Load topic progress from database
  useEffect(() => {
    const loadTopicProgress = async () => {
      if (!user) return;

      try {
        const progressDoc = await getDoc(doc(db, "topicProgress", `${user.uid}_${courseId}_${topicId}`));
        if (progressDoc.exists()) {
          const data = progressDoc.data() as TopicProgress;
          setTopicProgress(data);
        } else {
          // Create initial progress document
          const initialProgress: TopicProgress = {
            userId: user.uid,
            courseId: courseId,
            topicId: topicId,
            timeSpent: 0,
            lastAccessed: serverTimestamp(),
            completed: false,
            interactions: {}
          };

          await setDoc(doc(db, "topicProgress", `${user.uid}_${courseId}_${topicId}`), initialProgress);
          setTopicProgress(initialProgress);
        }
      } catch (error) {
        console.error("Error loading topic progress:", error);
      }
    };

    loadTopicProgress();
  }, [user, courseId, topicId]);

  // Track time spent and update database
  useEffect(() => {
    if (!user || !topicProgress) return;

    const updateProgress = async () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      
      try {
        await setDoc(doc(db, "topicProgress", `${user.uid}_${courseId}_${topicId}`), {
          userId: user.uid,
          courseId: courseId,
          topicId: topicId,
          timeSpent: (topicProgress?.timeSpent || 0) + timeSpent,
          lastAccessed: serverTimestamp()
        }, { merge: true });

      } catch (error) {
        console.error("Error updating topic progress:", error);
      }
    };

    const interval = setInterval(updateProgress, 30000);
    
    return () => {
      clearInterval(interval);
      updateProgress();
    };
  }, [user, courseId, topicId, startTime, topicProgress]);

  const getContent = () => {
    // Use the getter functions instead of direct object access
    const getContentFunctions = {
      "web-development": getWebDevContent,
      "blockchain-web3": getBlockchainContent,
      "mobile-development": getMobileContent,
      "ai-ml": getAIContent,
      "data-cloud": getDataCloudContent,
      "cybersecurity": getCyberContent,
      "software-engineering": getSoftwareContent,
      "design-creative": getDesignContent,
      "game-development": getGameContent,
      "product-project": getProductContent
    } as const;

    const getTopicContentFn = getContentFunctions[courseId as keyof typeof getContentFunctions];
    
    if (getTopicContentFn) {
      const Component = getTopicContentFn(topicId);
      
      if (Component && typeof Component === 'function') {
        return (
          <Component 
            onInteraction={(type: string, data: Record<string, unknown>) => recordInteraction(type, data)}
            userProgress={topicProgress}
          />
        );
      }
    }
    
    return <DefaultContent topicId={topicId} courseId={courseId} />;
  };

  const recordInteraction = async (type: string, data: unknown) => {
    if (!user) return;

    try {
      const currentInteractions = topicProgress?.interactions || {};
      const updatedInteractions = {
        ...currentInteractions,
        [type]: {
          ...(typeof data === "object" && data !== null ? data : {}),
          timestamp: serverTimestamp()
        }
      };

      await setDoc(doc(db, "topicProgress", `${user.uid}_${courseId}_${topicId}`), {
        userId: user.uid,
        courseId: courseId,
        topicId: topicId,
        interactions: updatedInteractions,
        lastAccessed: serverTimestamp()
      }, { merge: true });

      setTopicProgress(prev => prev ? {
        ...prev,
        interactions: updatedInteractions
      } : prev);
    } catch (error) {
      console.error("Error recording interaction:", error);
    }
  };

  const markTopicComplete = async () => {
    if (!user) return;

    try {
      await setDoc(doc(db, "topicProgress", `${user.uid}_${courseId}_${topicId}`), {
        userId: user.uid,
        courseId: courseId,
        topicId: topicId,
        completed: true,
        completedAt: serverTimestamp(),
        lastAccessed: serverTimestamp()
      }, { merge: true });

      setTopicProgress(prev => prev ? {
        ...prev,
        completed: true
      } : null);

    } catch (error) {
      console.error("Error marking topic complete:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Progress Indicator */}
      {topicProgress && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center justify-between text-sm text-blue-700">
            <span>Time spent: {Math.floor((topicProgress.timeSpent || 0) / 60)} minutes</span>
            <span>
              Status: {topicProgress.completed ? (
                <span className="text-green-600 font-semibold">✓ Completed</span>
              ) : (
                <span className="text-orange-600">In Progress</span>
              )}
            </span>
          </div>
          
          {!topicProgress.completed && (
            <div className="mt-3">
              <button
                onClick={markTopicComplete}
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
              >
                Mark as Complete
              </button>
            </div>
          )}
        </div>
      )}
      
      {getContent()}
    </div>
  );
}

function DefaultContent({ topicId, courseId }: { topicId: string; courseId: string }) {
  return (
    <div className="prose prose-lg max-w-none">
      <h2>Content Coming Soon</h2>
      <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
        <h3 className="text-gray-700 mb-4">Content Under Development</h3>
        <p className="text-gray-600">
          The content for &quot;{topicId}&quot; in the {courseId} course is currently being developed. 
          Please check back later or contact support if you need immediate access.
        </p>
        
        <div className="mt-6 p-4 bg-white rounded border shadow-sm">
          <h4 className="font-semibold mb-2 text-gray-800">What you can do:</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
              Review previous completed topics
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
              Practice exercises from earlier modules
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
              Join our community forum for discussions
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
              Check your overall progress in the sidebar
            </li>
          </ul>
        </div>

        <div className="mt-4 text-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}