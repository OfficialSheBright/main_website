export default function RealWorldProjectsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">4.5 Real-World Projects</h1>
      
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 mb-8">
        <h3 className="text-purple-800 font-semibold mb-3">Build Production-Ready Applications</h3>
        <ul className="text-purple-700 space-y-2">
          <li>• Social media platform with real-time features</li>
          <li>• Full-featured e-commerce application</li>
          <li>• Admin dashboard with analytics</li>
          <li>• Real-time chat application with WebSockets</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Project 1: Social Media App</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-3">Features & Architecture</h4>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold text-blue-700 mb-2">Core Features</h5>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• User authentication & profiles</li>
                <li>• Posts with images/videos</li>
                <li>• Like, comment, share system</li>
                <li>• Follow/Unfollow users</li>
                <li>• Real-time notifications</li>
                <li>• Search & hashtags</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold text-blue-700 mb-2">Tech Stack</h5>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• React + TypeScript</li>
                <li>• Node.js + Express</li>
                <li>• MongoDB + Mongoose</li>
                <li>• Socket.io for real-time</li>
                <li>• Cloudinary for media</li>
                <li>• JWT authentication</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold text-blue-700 mb-2">Advanced Features</h5>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Stories (24h expiry)</li>
                <li>• Dark/Light themes</li>
                <li>• Progressive Web App</li>
                <li>• Push notifications</li>
                <li>• Infinite scroll feed</li>
                <li>• Content moderation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-4">Key Implementation: Real-time Feed Updates</h4>
          <pre className="text-sm overflow-x-auto">
            <code>{`// Backend - Socket.io integration
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true
  }
});

// Socket middleware for authentication
io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    socket.userId = user._id;
    socket.join(\`user_\${user._id}\`);
    next();
  } catch (error) {
    next(new Error('Authentication error'));
  }
});

// Post creation with real-time updates
app.post('/api/posts', authenticateToken, upload.single('image'), async (req, res) => {
  try {
    const { content, hashtags } = req.body;
    
    const post = new Post({
      content,
      hashtags: hashtags ? hashtags.split(',') : [],
      author: req.user.userId,
      image: req.file ? req.file.path : null
    });

    await post.save();
    await post.populate('author', 'name username avatar');

    // Get user's followers
    const user = await User.findById(req.user.userId).populate('followers');
    
    // Emit to followers' feeds
    user.followers.forEach(follower => {
      io.to(\`user_\${follower._id}\`).emit('newPost', {
        post: post.toObject(),
        type: 'following'
      });
    });

    // Emit to hashtag rooms
    hashtags?.forEach(tag => {
      io.to(\`hashtag_\${tag}\`).emit('newPost', {
        post: post.toObject(),
        type: 'hashtag',
        hashtag: tag
      });
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Like/Unlike with real-time updates
app.post('/api/posts/:id/like', authenticateToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const userId = req.user.userId;

    const likeIndex = post.likes.indexOf(userId);
    
    if (likeIndex === -1) {
      post.likes.push(userId);
      
      // Notify post author
      if (post.author.toString() !== userId.toString()) {
        io.to(\`user_\${post.author}\`).emit('notification', {
          type: 'like',
          message: \`\${req.user.name} liked your post\`,
          postId: post._id,
          from: userId
        });
      }
    } else {
      post.likes.splice(likeIndex, 1);
    }

    await post.save();
    
    // Emit like update to all viewers
    io.emit(\`post_\${post._id}_update\`, {
      likes: post.likes,
      likeCount: post.likes.length
    });

    res.json({ likes: post.likes, likeCount: post.likes.length });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`}</code>
          </pre>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h4 className="font-semibold text-green-800 mb-3">Frontend: React Feed Component</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Frontend - Real-time feed with Socket.io
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

function SocialFeed() {
  const [posts, setPosts] = useState([]);
  const [socket, setSocket] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    // Initialize socket connection
    const newSocket = io(process.env.REACT_APP_API_URL, {
      auth: { token: localStorage.getItem('token') }
    });

    setSocket(newSocket);

    // Listen for new posts
    newSocket.on('newPost', (data) => {
      setPosts(prev => [data.post, ...prev]);
    });

    // Listen for post updates (likes, comments)
    newSocket.on('postUpdate', ({ postId, update }) => {
      setPosts(prev => prev.map(post => 
        post._id === postId ? { ...post, ...update } : post
      ));
    });

    // Listen for notifications
    newSocket.on('notification', (notification) => {
      showNotification(notification);
    });

    return () => newSocket.close();
  }, []);

  const handleLike = async (postId) => {
    try {
      await ApiService.request(\`/api/posts/\${postId}/like\`, {
        method: 'POST'
      });
    } catch (error) {
      console.error('Like error:', error);
    }
  };

  return (
    <div className="feed-container">
      <InfiniteScroll
        dataLength={posts.length}
        next={loadMorePosts}
        hasMore={hasMore}
        loader={<PostSkeleton />}
      >
        {posts.map(post => (
          <PostCard
            key={post._id}
            post={post}
            onLike={() => handleLike(post._id)}
            currentUser={user}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

function PostCard({ post, onLike, currentUser }) {
  const isLiked = post.likes.includes(currentUser.id);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center mb-4">
        <img 
          src={post.author.avatar} 
          alt={post.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h4 className="font-semibold">{post.author.name}</h4>
          <p className="text-gray-500 text-sm">@{post.author.username}</p>
        </div>
      </div>
      
      <p className="mb-4">{post.content}</p>
      
      {post.image && (
        <img 
          src={post.image} 
          alt="Post content"
          className="w-full rounded-lg mb-4"
        />
      )}

      <div className="flex items-center space-x-6">
        <button
          onClick={onLike}
          className={\`flex items-center space-x-2 \${
            isLiked ? 'text-red-500' : 'text-gray-500'
          }\`}
        >
          <span>{isLiked ? '❤️' : '🤍'}</span>
          <span>{post.likes.length}</span>
        </button>
        
        <button className="flex items-center space-x-2 text-gray-500">
          <span>💬</span>
          <span>{post.comments?.length || 0}</span>
        </button>
        
        <button className="flex items-center space-x-2 text-gray-500">
          <span>🔄</span>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Project 2: E-commerce Application</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">E-commerce Features</h4>
            <ul className="text-orange-700 space-y-2 text-sm">
              <li>• Product catalog with search & filters</li>
              <li>• Shopping cart & wishlist</li>
              <li>• Secure checkout with Stripe</li>
              <li>• Order tracking & history</li>
              <li>• User reviews & ratings</li>
              <li>• Inventory management</li>
              <li>• Admin panel for store management</li>
              <li>• Email notifications</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Project 3: Admin Dashboard</h4>
            <ul className="text-purple-700 space-y-2 text-sm">
              <li>• Real-time analytics with charts</li>
              <li>• User management system</li>
              <li>• Content management</li>
              <li>• Role-based permissions</li>
              <li>• Data export functionality</li>
              <li>• Activity logs & audit trails</li>
              <li>• System settings & configuration</li>
              <li>• Responsive design for all devices</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Project 4: Real-Time Chat Application</h2>
        
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <h4 className="font-semibold text-indigo-800 mb-3">WebSocket Chat Implementation</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Chat server with Socket.io
const chatNamespace = io.of('/chat');

chatNamespace.use(authenticateSocket);

chatNamespace.on('connection', (socket) => {
  console.log(\`User \${socket.userId} connected to chat\`);

  // Join user to their rooms
  socket.on('joinRoom', async (roomId) => {
    try {
      // Verify user has access to room
      const room = await ChatRoom.findById(roomId);
      if (!room.members.includes(socket.userId)) {
        throw new Error('Access denied');
      }

      socket.join(roomId);
      socket.currentRoom = roomId;

      // Send recent messages
      const messages = await Message.find({ room: roomId })
        .populate('sender', 'name avatar')
        .sort({ createdAt: -1 })
        .limit(50);

      socket.emit('roomMessages', messages.reverse());
      
      // Notify others user joined
      socket.to(roomId).emit('userJoined', {
        userId: socket.userId,
        message: \`User joined the chat\`
      });

    } catch (error) {
      socket.emit('error', { message: error.message });
    }
  });

  // Handle new message
  socket.on('sendMessage', async (data) => {
    try {
      const { content, type = 'text', roomId } = data;

      // Create and save message
      const message = new Message({
        content,
        type,
        sender: socket.userId,
        room: roomId || socket.currentRoom,
        createdAt: new Date()
      });

      await message.save();
      await message.populate('sender', 'name avatar');

      // Emit to room members
      chatNamespace.to(socket.currentRoom).emit('newMessage', message);

      // Update room's last message
      await ChatRoom.findByIdAndUpdate(socket.currentRoom, {
        lastMessage: message._id,
        lastActivity: new Date()
      });

    } catch (error) {
      socket.emit('error', { message: error.message });
    }
  });

  // Handle typing indicators
  socket.on('typing', ({ isTyping, roomId }) => {
    socket.to(roomId).emit('userTyping', {
      userId: socket.userId,
      isTyping
    });
  });

  // Handle file sharing
  socket.on('shareFile', async (data) => {
    try {
      const { fileUrl, fileName, fileType, roomId } = data;

      const message = new Message({
        content: fileName,
        type: 'file',
        fileUrl,
        fileType,
        sender: socket.userId,
        room: roomId,
        createdAt: new Date()
      });

      await message.save();
      await message.populate('sender', 'name avatar');

      chatNamespace.to(roomId).emit('newMessage', message);

    } catch (error) {
      socket.emit('error', { message: error.message });
    }
  });

  socket.on('disconnect', () => {
    console.log(\`User \${socket.userId} disconnected from chat\`);
    
    if (socket.currentRoom) {
      socket.to(socket.currentRoom).emit('userLeft', {
        userId: socket.userId,
        message: 'User left the chat'
      });
    }
  });
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-purple-800 font-semibold mb-4">🚀 Project Development Roadmap</h3>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div>
            <strong className="text-purple-700">Week 1-2:</strong>
            <ul className="text-purple-600 mt-1 space-y-1">
              <li>• Project setup & architecture</li>
              <li>• Authentication system</li>
              <li>• Database design</li>
              <li>• Basic CRUD operations</li>
            </ul>
          </div>
          <div>
            <strong className="text-purple-700">Week 3-4:</strong>
            <ul className="text-purple-600 mt-1 space-y-1">
              <li>• Core features implementation</li>
              <li>• UI/UX development</li>
              <li>• API integration</li>
              <li>• Real-time features</li>
            </ul>
          </div>
          <div>
            <strong className="text-purple-700">Week 5-6:</strong>
            <ul className="text-purple-600 mt-1 space-y-1">
              <li>• Advanced features</li>
              <li>• Third-party integrations</li>
              <li>• Testing & debugging</li>
              <li>• Performance optimization</li>
            </ul>
          </div>
          <div>
            <strong className="text-purple-700">Week 7-8:</strong>
            <ul className="text-purple-600 mt-1 space-y-1">
              <li>• Deployment setup</li>
              <li>• Security implementation</li>
              <li>• Documentation</li>
              <li>• Portfolio presentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}