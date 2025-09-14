# SumitChat 💬

A modern, real-time chat application built with React and Node.js, featuring instant messaging, user authentication, and a beautiful responsive UI.

![SumitChat](https://img.shields.io/badge/SumitChat-v1.0.0-blue)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Socket.IO](https://img.shields.io/badge/Real--time-Socket.IO-black)

## ✨ Features

- 🔐 **User Authentication** - Secure signup/login with JWT tokens
- 💬 **Real-time Messaging** - Instant message delivery with Socket.IO
- 👥 **Online Status** - See who's online in real-time
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS and DaisyUI
- 🌙 **Theme Support** - Multiple theme options
- 📱 **Mobile Responsive** - Works seamlessly on all devices
- 🖼️ **Image Uploads** - Share images with Cloudinary integration
- 🔒 **Secure** - Protected routes and encrypted passwords

## 🚀 Demo

<!-- Add demo GIF or screenshots here -->
*Live demo coming soon...*

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Beautiful UI components
- **Zustand** - Lightweight state management
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Socket.IO Client** - Real-time communication
- **React Hot Toast** - Beautiful notifications
- **Lucide React** - Modern icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.IO** - Real-time bidirectional communication
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image upload and management
- **Cookie Parser** - Parse HTTP cookies
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Cloudinary Account** (for image uploads)

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/SumitLikeCpp/SumitChat.git
cd SumitChat
```

### 2. Install dependencies
```bash
# Install root dependencies
npm install

# Install backend dependencies
npm install --prefix backend

# Install frontend dependencies
npm install --prefix frontend
```

### 3. Environment Configuration

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5001
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/sumitchat
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sumitchat

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-here

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### 4. Database Setup

If using local MongoDB:
```bash
# Start MongoDB service
# On Windows (if installed as service):
net start MongoDB

# On macOS:
brew services start mongodb-community

# On Linux:
sudo systemctl start mongod
```

Optional: Seed the database with sample users:
```bash
cd backend && node seeds/user.seed.js
```

## 🚀 Running the Application

### Development Mode

#### Option 1: Run both servers simultaneously
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

#### Option 2: Use the root scripts
```bash
# Build the project
npm run build

# Start production server
npm start
```

### Production Mode
```bash
# Build the frontend
npm run build

# Start the production server
npm start
```

The application will be available at:
- **Frontend**: http://localhost:5173 (development)
- **Backend**: http://localhost:5001
- **Production**: http://localhost:5001 (serves both frontend and backend)

## 📁 Project Structure

```
SumitChat/
├── backend/
│   ├── seeds/
│   │   └── user.seed.js          # Database seeding
│   ├── src/
│   │   ├── controllers/          # Request handlers
│   │   │   ├── auth.controller.js
│   │   │   └── message.controller.js
│   │   ├── lib/                  # Utilities & config
│   │   │   ├── cloudinary.js     # Image upload config
│   │   │   ├── db.js             # Database connection
│   │   │   ├── socket.js         # Socket.IO setup
│   │   │   └── utils.js          # Helper functions
│   │   ├── middleware/           # Custom middleware
│   │   │   └── auth.middleware.js
│   │   ├── models/               # Database models
│   │   │   ├── message.model.js
│   │   │   └── user.model.js
│   │   ├── routes/               # API routes
│   │   │   ├── auth.route.js
│   │   │   └── message.route.js
│   │   └── index.js              # Server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── skeletons/        # Loading components
│   │   │   ├── AuthImagePattern.jsx
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── ChatHeader.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoChatSelected.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── constants/            # App constants
│   │   ├── lib/                  # Utilities
│   │   │   ├── axios.js          # HTTP client config
│   │   │   └── utils.js          # Helper functions
│   │   ├── pages/                # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   ├── SettingsPage.jsx
│   │   │   └── SignUpPage.jsx
│   │   ├── store/                # State management
│   │   │   ├── useAuthStore.js
│   │   │   ├── useChatStore.js
│   │   │   └── useThemeStore.js
│   │   ├── App.jsx               # Main App component
│   │   ├── index.css             # Global styles
│   │   └── main.jsx              # App entry point
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── package.json                  # Root package.json
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `PUT /api/auth/update-profile` - Update user profile
- `GET /api/auth/check` - Check authentication status

### Messages
- `GET /api/messages/users` - Get all users for sidebar
- `GET /api/messages/:id` - Get messages with specific user
- `POST /api/messages/send/:id` - Send message to user

### WebSocket Events
- `connection` - User connects
- `disconnect` - User disconnects
- `newMessage` - Real-time message delivery
- `getOnlineUsers` - Get list of online users

## 🎨 Theming

The app supports multiple themes powered by DaisyUI:
- Light
- Dark
- Cupcake
- Bumblebee
- Emerald
- Corporate
- Synthwave
- Retro
- Cyberpunk
- Valentine
- Halloween
- Garden
- Forest
- Aqua
- Lofi
- Pastel
- Fantasy
- Wireframe
- Black
- Luxury
- Dracula
- CMYK
- Autumn
- Business
- Acid
- Lemonade
- Night
- Coffee
- Winter

## 🔐 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - bcryptjs for secure password storage
- **Protected Routes** - Authentication middleware
- **CORS Configuration** - Proper cross-origin setup
- **Input Validation** - Server-side validation
- **HTTP-only Cookies** - Secure token storage

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   ```bash
   # Make sure MongoDB is running
   # Check your MONGODB_URI in .env file
   ```

2. **Port Already in Use**
   ```bash
   # Change PORT in .env file
   # Or kill the process using the port
   ```

3. **Cloudinary Upload Failed**
   ```bash
   # Verify your Cloudinary credentials in .env
   # Check network connection
   ```

4. **Socket Connection Issues**
   ```bash
   # Ensure backend server is running
   # Check CORS configuration
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sumit**
- GitHub: [@SumitLikeCpp](https://github.com/SumitLikeCpp)
- Project Link: [https://github.com/SumitLikeCpp/SumitChat](https://github.com/SumitLikeCpp/SumitChat)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Amazing frontend library
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Socket.IO](https://socket.io/) - Real-time communication
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Beautiful UI components
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Cloudinary](https://cloudinary.com/) - Image management service

---

⭐ **Star this repo if you found it helpful!** ⭐