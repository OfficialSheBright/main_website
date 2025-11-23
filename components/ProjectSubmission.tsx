"use client";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";
import { 
  doc, 
  setDoc,  
  serverTimestamp, 
  query, 
  collection, 
  where, 
  getDocs 
} from "firebase/firestore";
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  ClockIcon,
  AcademicCapIcon,
  LinkIcon,
  VideoCameraIcon,
  DocumentTextIcon
} from "@heroicons/react/24/outline";
import firebase from "firebase/compat/app";

interface ProjectSubmissionProps {
  courseId: string;
  courseName?: string;
  onSubmissionComplete?: () => void;
  className?: string;
}

interface ExistingSubmission {
  id: string;
  status: "pending" | "approved" | "rejected" | "needs_revision";
  score?: number;
  submittedAt: unknown;
  reviewedAt?: unknown;
  reviewComments?: string;
  githubUrl: string;
  youtubeUrl: string;
  description: string;
}

export default function ProjectSubmission({ 
  courseId, 
  courseName,
  onSubmissionComplete,
  className = ""
}: ProjectSubmissionProps) {
  const [user, loading] = useAuthState(auth);
  const [githubUrl, setGithubUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('loading');
  const [errorMessage, setErrorMessage] = useState("");
  const [existingSubmission, setExistingSubmission] = useState<ExistingSubmission | null>(null);

  // Course names mapping
  const courseNames: Record<string, string> = {
    "web-development": "Complete Web Development",
    "mobile-development": "Mobile App Development", 
    "ai-ml": "AI & Machine Learning"
  };

  const displayCourseName = courseName || courseNames[courseId] || courseId;

  useEffect(() => {
    if (user) {
      checkExistingSubmission();
    }
  }, [user, courseId]);

  // Check if user already has a submission for this course
  const checkExistingSubmission = async () => {
    if (!user) return;
    
    try {
      setSubmitStatus('loading');
      
      // Check for existing submission
      const submissionQuery = query(
        collection(db, "projectSubmissions"),
        where("userId", "==", user.uid),
        where("courseId", "==", courseId)
      );
      
      const snapshot = await getDocs(submissionQuery);
      
      if (!snapshot.empty) {
        const submissionData = snapshot.docs[0].data();
        setExistingSubmission({
          id: snapshot.docs[0].id,
          ...submissionData
        } as ExistingSubmission);
        setSubmitStatus('success');
      } else {
        setSubmitStatus('idle');
      }
    } catch (error) {
      console.error("Error checking existing submission:", error);
      setSubmitStatus('idle');
    }
  };

  // URL validation functions
  const isValidGitHubUrl = (url: string) => {
    const githubPattern = /^https:\/\/github\.com\/[\w\-\.]+\/[\w\-\.]+\/?$/;
    return githubPattern.test(url);
  };

  const isValidYouTubeUrl = (url: string) => {
    const youtubePatterns = [
      /^https:\/\/www\.youtube\.com\/watch\?v=[\w\-]+/,
      /^https:\/\/youtu\.be\/[\w\-]+/,
      /^https:\/\/youtube\.com\/watch\?v=[\w\-]+/
    ];
    return youtubePatterns.some(pattern => pattern.test(url));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    setErrorMessage("");
    setSubmitStatus('idle');

    try {
      // Validate URLs
      if (!isValidGitHubUrl(githubUrl)) {
        throw new Error("Please enter a valid GitHub repository URL (e.g., https://github.com/username/repository)");
      }

      if (!isValidYouTubeUrl(youtubeUrl)) {
        throw new Error("Please enter a valid YouTube URL (e.g., https://youtube.com/watch?v=... or https://youtu.be/...)");
      }

      if (description.trim().length < 100) {
        throw new Error("Project description must be at least 100 characters long");
      }

      // Create unique submission ID
      const submissionId = `${user.uid}_${courseId}_${Date.now()}`;

      // Submit project to database
      await setDoc(doc(db, "projectSubmissions", submissionId), {
        userId: user.uid,
        courseId,
        courseName: displayCourseName,
        userName: user.displayName || "Anonymous User",
        userEmail: user.email || "",
        githubUrl: githubUrl.trim(),
        youtubeUrl: youtubeUrl.trim(),
        description: description.trim(),
        status: "pending",
        score: null,
        submittedAt: serverTimestamp(),
        reviewedAt: null,
        reviewComments: null,
        reviewerId: null
      });

      // Update course progress to mark project as submitted
      const progressId = `${user.uid}_${courseId}`;
      await setDoc(doc(db, "courseProgress", progressId), {
        projectSubmitted: true,
        projectSubmittedAt: serverTimestamp(),
        lastAccessed: serverTimestamp()
      }, { merge: true });

      setSubmitStatus('success');
      
      // Clear form
      setGithubUrl("");
      setYoutubeUrl("");
      setDescription("");

      // Call completion callback
      onSubmissionComplete?.();

      // Check for the newly created submission
      setTimeout(() => {
        checkExistingSubmission();
      }, 1000);

    } catch (error) {
      console.error("Error submitting project:", error);
      setErrorMessage(error instanceof Error ? error.message : "Failed to submit project. Please try again.");
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResubmit = () => {
    setExistingSubmission(null);
    setSubmitStatus('idle');
  };

  // Loading state
  if (loading || submitStatus === 'loading') {
    return (
      <div className={`max-w-4xl mx-auto px-4 py-6 ${className}`}>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-3"></div>
          <p className="text-gray-600 text-sm">Loading submission status...</p>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!user) {
    return (
      <div className={`max-w-4xl mx-auto px-4 py-6 ${className}`}>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
          <ExclamationTriangleIcon className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-yellow-800 mb-1">Authentication Required</h3>
          <p className="text-yellow-700 text-sm">Please sign in to submit your capstone project.</p>
        </div>
      </div>
    );
  }

  // Show existing submission status
  if (existingSubmission) {
    const getStatusColor = (status: string) => {
      switch (status) {
        case 'pending': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
        case 'approved': return 'bg-green-50 border-green-200 text-green-800';
        case 'rejected': return 'bg-red-50 border-red-200 text-red-800';
        case 'needs_revision': return 'bg-orange-50 border-orange-200 text-orange-800';
        default: return 'bg-gray-50 border-gray-200 text-gray-800';
      }
    };

    const getStatusIcon = (status: string) => {
      switch (status) {
        case 'pending': return <ClockIcon className="w-6 h-6 text-yellow-500" />;
        case 'approved': return <CheckCircleIcon className="w-6 h-6 text-green-500" />;
        case 'rejected': return <ExclamationTriangleIcon className="w-6 h-6 text-red-500" />;
        case 'needs_revision': return <ExclamationTriangleIcon className="w-6 h-6 text-orange-500" />;
        default: return <ClockIcon className="w-6 h-6 text-gray-500" />;
      }
    };

    const canResubmit = existingSubmission.status === 'rejected' || existingSubmission.status === 'needs_revision';
    const isApprovedWithCertificate = existingSubmission.status === 'approved' && existingSubmission.score && existingSubmission.score >= 60;

    return (
      <div className={`max-w-4xl mx-auto px-4 py-6 ${className}`}>
        <div className={`rounded-lg border p-4 ${getStatusColor(existingSubmission.status)}`}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div className="flex items-center mb-3 lg:mb-0">
              {getStatusIcon(existingSubmission.status)}
              <div className="ml-3">
                <h3 className="text-lg font-bold">
                  Status: {existingSubmission.status.replace('_', ' ').toUpperCase()}
                </h3>
                <p className="text-sm opacity-90">
                  {existingSubmission.status === 'pending' && "Your project is being reviewed"}
                  {existingSubmission.status === 'approved' && "Congratulations! Your project has been approved"}
                  {existingSubmission.status === 'rejected' && "Your project needs improvement"}
                  {existingSubmission.status === 'needs_revision' && "Your project needs some revisions"}
                </p>
              </div>
            </div>
            
            {existingSubmission.score !== undefined && (
              <div className="text-right">
                <div className="text-xl font-bold">
                  {existingSubmission.score}%
                </div>
                <div className="text-sm">
                  {existingSubmission.score >= 60 ? "Passed" : "Failed"}
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Submission Details */}
            <div className="bg-white bg-opacity-50 rounded-lg p-3">
              <h4 className="font-semibold mb-2 text-sm">Submission Details:</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center space-x-2">
                  <LinkIcon className="w-3 h-3" />
                  <a 
                    href={existingSubmission.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline truncate"
                  >
                    GitHub Repository
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <VideoCameraIcon className="w-3 h-3" />
                  <a 
                    href={existingSubmission.youtubeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-600 hover:underline truncate"
                  >
                    Demo Video
                  </a>
                </div>
                <p><strong>Submitted:</strong> {existingSubmission.submittedAt ? (existingSubmission.submittedAt as firebase.firestore.Timestamp).toDate().toLocaleDateString() : "Recently"}</p>
              </div>
            </div>

            {/* Review Comments */}
            <div className="bg-white bg-opacity-50 rounded-lg p-3">
              <h4 className="font-semibold mb-2 text-sm">Review Feedback:</h4>
              {existingSubmission.reviewComments ? (
                <p className="text-xs">{existingSubmission.reviewComments}</p>
              ) : (
                <p className="text-xs text-gray-500">No feedback yet</p>
              )}
            </div>
          </div>

          {/* Certificate Status */}
          {isApprovedWithCertificate && (
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg p-3 mt-4 text-center">
              <AcademicCapIcon className="w-6 h-6 mx-auto mb-1" />
              <p className="font-semibold text-sm">Certificate Earned!</p>
              <p className="text-xs opacity-90">You have successfully completed the {displayCourseName} course</p>
            </div>
          )}

          {/* Resubmit Button */}
          {canResubmit && (
            <div className="text-center mt-4">
              <button
                onClick={handleResubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit Revised Project
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // New submission form
  return (
    <div className={`max-w-6xl mx-auto px-4 py-6 ${className}`}>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4 text-white">
          <h2 className="text-xl font-bold mb-1">Submit Your Capstone Project</h2>
          <p className="text-sm opacity-90">Course: {displayCourseName}</p>
        </div>

        {/* Requirements Section - Horizontal on desktop */}
        <div className="bg-blue-50 border-b border-blue-100 px-6 py-3">
          <h3 className="font-semibold text-blue-800 mb-2 text-sm">Submission Requirements:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="text-blue-700 text-xs">Complete, functional application</div>
            <div className="text-blue-700 text-xs">Professional README with setup</div>
            <div className="text-blue-700 text-xs">Live deployment URL</div>
            <div className="text-blue-700 text-xs">5-10 minute demo video</div>
            <div className="text-blue-700 text-xs">Responsive design</div>
            <div className="text-blue-700 text-xs">Clean, documented code</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left Column */}
            <div className="space-y-4">
              {/* GitHub URL */}
              <div>
                <label htmlFor="github" className="flex items-center text-sm font-semibold text-gray-900 mb-1">
                  <LinkIcon className="w-4 h-4 mr-1" />
                  GitHub Repository URL *
                </label>
                <input
                  id="github"
                  type="url"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/username/repository-name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                />
                <p className="text-xs text-gray-600 mt-1">
                  Link to your complete project repository with detailed README
                </p>
              </div>

              {/* YouTube URL */}
              <div>
                <label htmlFor="youtube" className="flex items-center text-sm font-semibold text-gray-900 mb-1">
                  <VideoCameraIcon className="w-4 h-4 mr-1" />
                  YouTube Demo Video URL *
                </label>
                <input
                  id="youtube"
                  type="url"
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  placeholder="https://youtube.com/watch?v=your-video-id"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                />
                <p className="text-xs text-gray-600 mt-1">
                  5-10 minute walkthrough demonstrating key features
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Description */}
              <div>
                <label htmlFor="description" className="flex items-center text-sm font-semibold text-gray-900 mb-1">
                  <DocumentTextIcon className="w-4 h-4 mr-1" />
                  Project Description *
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your project:
- Problem it solves
- Technologies used
- Key features
- Challenges overcome
- What you learned"
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical text-sm"
                />
                <p className="text-xs text-gray-600 mt-1">
                  Minimum 100 characters. Explain your implementation approach
                </p>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start space-x-2 mt-4">
              <ExclamationTriangleIcon className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <div className="text-red-700 text-sm">
                <strong>Error:</strong> {errorMessage}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-3 sm:mb-0">
              Projects scoring 60% or higher earn a completion certificate
            </p>
            <button
              type="submit"
              disabled={isSubmitting || !githubUrl || !youtubeUrl || description.length < 100}
              className={`w-full sm:w-auto py-2 px-6 rounded-lg font-semibold text-white transition-all duration-200 text-sm ${
                isSubmitting || !githubUrl || !youtubeUrl || description.length < 100
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-md'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Project for Review'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}