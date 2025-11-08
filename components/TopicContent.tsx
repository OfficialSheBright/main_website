"use client";
import { webDevelopmentContent } from "@/lib/course-content/web-development";
import { mobileDevelopmentContent } from "@/lib/course-content/mobile-development";
import { aiMLContent } from "@/lib/course-content/ai-ml";

interface TopicContentProps {
  topicId: string;
  courseId: string;
}

export default function TopicContent({ topicId, courseId }: TopicContentProps) {
  const getContent = () => {
    switch (courseId) {
      case "web-development":
        return webDevelopmentContent[topicId] || <DefaultContent topicId={topicId} courseId={courseId} />;
      case "mobile-development":
        return mobileDevelopmentContent[topicId] || <DefaultContent topicId={topicId} courseId={courseId} />;
      case "ai-ml":
        return aiMLContent[topicId] || <DefaultContent topicId={topicId} courseId={courseId} />;
      default:
        return <DefaultContent topicId={topicId} courseId={courseId} />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {getContent()}
    </div>
  );
}

function DefaultContent({ topicId, courseId }: { topicId: string; courseId: string }) {
  return (
    <div className="prose prose-lg max-w-none">
      <h2>Content Coming Soon</h2>
      <div className="bg-gray-50 border-l-4 border-gray-400 p-6">
        <h3 className="text-gray-700 mb-4">Content Under Development</h3>
        <p className="text-gray-600">
          The content for &quot;{topicId}&quot; in the {courseId} course is currently being developed. 
          Please check back later or contact support if you need immediate access.
        </p>
        
        <div className="mt-6 p-4 bg-white rounded border">
          <h4 className="font-semibold mb-2">What you can do:</h4>
          <ul className="space-y-1 text-sm">
            <li>• Review previous completed topics</li>
            <li>• Practice exercises from earlier modules</li>
            <li>• Join our community forum for discussions</li>
            <li>• Check your overall progress in the sidebar</li>
          </ul>
        </div>
      </div>
    </div>
  );
}