import { CourseConfig } from "./index";

export const aiMLConfig: CourseConfig = {
  id: "ai-ml",
  title: "AI & Machine Learning Course", 
  description: "Master artificial intelligence and machine learning concepts",
  totalHours: 40,
  difficulty: "Advanced",
  modules: [
    {
      id: "ml-fundamentals",
      title: "Machine Learning Fundamentals",
      topics: [
        { id: "ml-basics", title: "ML Basics", duration: "75 min", completed: false },
        { id: "python-ml", title: "Python for ML", duration: "90 min", completed: false },
      ]
    },
    {
      id: "deep-learning",
      title: "Deep Learning",
      topics: [
        { id: "neural-networks", title: "Neural Networks", duration: "90 min", completed: false },
        { id: "tensorflow-intro", title: "TensorFlow Basics", duration: "105 min", completed: false },
      ]
    }
  ]
};