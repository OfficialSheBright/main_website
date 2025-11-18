export default function MernPernStackContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">4.2 MERN / PERN Stack</h1>
      
      <div className="bg-violet-50 border-l-4 border-violet-500 p-6 mb-8">
        <h3 className="text-violet-800 font-semibold mb-3">Popular Full-Stack Combinations</h3>
        <ul className="text-violet-700 space-y-2">
          <li>• <strong>MERN:</strong> MongoDB + Express + React + Node.js</li>
          <li>• <strong>PERN:</strong> PostgreSQL + Express + React + Node.js</li>
          <li>• Complete application development workflow</li>
          <li>• Real-world project implementation</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">MERN Stack Implementation</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-green-800 mb-3">Project Structure</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`mern-blog-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
├── server/                 # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── shared/                 # Shared utilities
└── package.json`}</code>
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">MongoDB Model (Mongoose)</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tags: [String],
  featured: {
    type: Boolean,
    default: false
  },
  likes: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    content: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

// Virtual for like count
postSchema.virtual('likeCount').get(function() {
  return this.likes.length;
});

module.exports = mongoose.model('Post', postSchema);`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">React Component</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// components/PostCard.jsx
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import ApiService from '../services/ApiService';

export default function PostCard({ post, onUpdate }) {
  const { user } = useAuth();
  const [liked, setLiked] = useState(
    post.likes.some(like => like.user === user?.id)
  );
  const [likeCount, setLikeCount] = useState(post.likeCount);

  const handleLike = async () => {
    try {
      if (liked) {
        await ApiService.request(\`/api/posts/\${post._id}/unlike\`, {
          method: 'DELETE'
        });
        setLikeCount(prev => prev - 1);
      } else {
        await ApiService.request(\`/api/posts/\${post._id}/like\`, {
          method: 'POST'
        });
        setLikeCount(prev => prev + 1);
      }
      setLiked(!liked);
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.content}</p>
      
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={handleLike}
            className={\`flex items-center space-x-1 \${
              liked ? 'text-red-500' : 'text-gray-500'
            }\`}
          >
            <span>{liked ? '❤️' : '🤍'}</span>
            <span>{likeCount}</span>
          </button>
        </div>
        
        <span className="text-sm text-gray-500">
          By {post.author.name}
        </span>
      </div>
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">PERN Stack Implementation</h2>
        
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-indigo-800 mb-3">PostgreSQL with Prisma</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String
  password  String
  avatar    String?
  bio       String?
  posts     Post[]
  likes     Like[]
  comments  Comment[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users")
}

model Post {
  id        Int       @id @default(autoincrement())
  title     String
  content   String
  published Boolean   @default(false)
  featured  Boolean   @default(false)
  tags      String[]
  author    User      @relation(fields: [authorId], references: [id])
  authorId  Int
  likes     Like[]
  comments  Comment[]
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@map("posts")
}

model Like {
  id     Int  @id @default(autoincrement())
  user   User @relation(fields: [userId], references: [id])
  userId Int
  post   Post @relation(fields: [postId], references: [id])
  postId Int
  createdAt DateTime @default(now())

  @@unique([userId, postId])
  @@map("likes")
}

model Comment {
  id      Int    @id @default(autoincrement())
  content String
  user    User   @relation(fields: [userId], references: [id])
  userId  Int
  post    Post   @relation(fields: [postId], references: [id])
  postId  Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("comments")
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h4 className="font-semibold text-orange-800 mb-3">Controller with Prisma</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// controllers/postController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const postController = {
  // Get all posts with author and like count
  getAllPosts: async (req, res) => {
    try {
      const posts = await prisma.post.findMany({
        include: {
          author: {
            select: { id: true, name: true, avatar: true }
          },
          likes: {
            select: { userId: true }
          },
          comments: {
            include: {
              user: {
                select: { id: true, name: true, avatar: true }
              }
            },
            orderBy: { createdAt: 'desc' }
          },
          _count: {
            select: { likes: true, comments: true }
          }
        },
        orderBy: { createdAt: 'desc' }
      });

      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create new post
  createPost: async (req, res) => {
    try {
      const { title, content, tags } = req.body;
      const userId = req.user.userId;

      const post = await prisma.post.create({
        data: {
          title,
          content,
          tags: tags || [],
          authorId: userId
        },
        include: {
          author: {
            select: { id: true, name: true, avatar: true }
          }
        }
      });

      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Toggle post like
  toggleLike: async (req, res) => {
    try {
      const { postId } = req.params;
      const userId = req.user.userId;

      const existingLike = await prisma.like.findUnique({
        where: {
          userId_postId: {
            userId: parseInt(userId),
            postId: parseInt(postId)
          }
        }
      });

      if (existingLike) {
        await prisma.like.delete({
          where: { id: existingLike.id }
        });
        res.json({ message: 'Post unliked', liked: false });
      } else {
        await prisma.like.create({
          data: {
            userId: parseInt(userId),
            postId: parseInt(postId)
          }
        });
        res.json({ message: 'Post liked', liked: true });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = postController;`}</code>
            </pre>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-lg p-6">
        <h3 className="text-violet-800 font-semibold mb-2">🔧 Stack Comparison</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong className="text-violet-700">MERN (MongoDB):</strong>
            <ul className="text-violet-600 mt-1 space-y-1">
              <li>• Flexible schema</li>
              <li>• JSON-like documents</li>
              <li>• Great for rapid prototyping</li>
              <li>• Horizontal scaling</li>
            </ul>
          </div>
          <div>
            <strong className="text-violet-700">PERN (PostgreSQL):</strong>
            <ul className="text-violet-600 mt-1 space-y-1">
              <li>• ACID compliance</li>
              <li>• Complex relationships</li>
              <li>• Strong consistency</li>
              <li>• Advanced queries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}