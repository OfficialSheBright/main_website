import { useState } from "react";
import { db } from "@/lib/firebase"; // Your Firestore instance
import { doc, setDoc } from "firebase/firestore";

interface ProjectSubmissionProps {
  userId: string;
  courseId: string;
}

export default function ProjectSubmission({ userId, courseId }: ProjectSubmissionProps) {
  const [githubUrl, setGithubUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await setDoc(doc(db, "projectSubmissions", `${userId}_${courseId}`), {
      userId,
      courseId,
      githubUrl,
      youtubeUrl,
      description,
      status: "pending",
      score: null
    });
    await setDoc(doc(db, "courseProgress", `${userId}_${courseId}`), {
      projectSubmitted: true
    }, { merge: true });
    setIsSubmitting(false);
    alert("Project submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input value={githubUrl} onChange={e => setGithubUrl(e.target.value)} placeholder="GitHub URL" required />
      <input value={youtubeUrl} onChange={e => setYoutubeUrl(e.target.value)} placeholder="YouTube URL" required />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
      <button type="submit" disabled={isSubmitting}>Submit Project</button>
    </form>
  );
}