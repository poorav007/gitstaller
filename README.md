# 📦 Gitstaller - AI GitHub Installation Guide Generator

An intelligent tool that automatically generates step-by-step installation guides for GitHub repositories, making it easy for non-technical users to install open-source software without using the terminal.

## ⚠️ Quick Start - Read This First!

**Your project is located at:** `C:\Users\Hp\OneDrive\Desktop\gitstaller`

### 🚀 Easiest Way to Run (3 Options):

1. **Double-Click Method** (Recommended for beginners):
   - Double-click `start-dev.bat` in the project folder to start everything at once!
   - Or run `start-backend.bat` and `start-frontend.bat` separately

2. **Command Prompt**:
   ```cmd
   cd C:\Users\Hp\OneDrive\Desktop\gitstaller
   ```
   Then see [QUICKSTART.md](QUICKSTART.md) for detailed instructions

3. **Already know what you're doing?** See the full installation guide below ⬇️

> 📖 **New to Gitstaller?** Check [QUICKSTART.md](QUICKSTART.md) for step-by-step instructions with screenshots!

## 🎯 Problem Solved

Most open-source projects on GitHub require terminal/command-line knowledge to install. Gitstaller analyzes any GitHub repository and generates simple, visual installation guides that anyone can follow.

## ✨ Features

- **Automatic Project Detection** - Detects Node.js, Python, Docker projects
- **Step-by-Step Guides** - Clear, numbered instructions
- **Non-Technical Friendly** - No terminal knowledge required
- **One-Click Copy** - Copy installation guide to clipboard
- **Real-Time Analysis** - Analyzes README.md to generate guides
- **Error Handling** - Helpful troubleshooting tips

## 🏗️ Architecture

```
Frontend (React)
↓
Backend API (Express.js)
↓
GitHub API (fetch README)
↓
Installation Guide Generated
```

## 🚀 Quick Start

### Prerequisites
- Node.js v14+ (https://nodejs.org/)
- npm or yarn
- Git (https://git-scm.com/)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/poorav007/gitstaller.git
cd gitstaller
```

2. **Setup Backend**
```bash
cd backend
npm install
npm start
```
Backend runs on `http://localhost:5000`

3. **Setup Frontend (in new terminal)**
```bash
cd frontend
npm install
npm start
```
Frontend runs on `http://localhost:3000`

4. **Open in Browser**
```
http://localhost:3000
```

## 📝 How to Use

1. Copy a GitHub repository URL (e.g., https://github.com/facebook/react)
2. Paste it in the input field
3. Click "Generate Installation Guide"
4. Get step-by-step instructions
5. Copy and share with others

## 🛠️ Tech Stack

- **Frontend**: React.js, CSS3
- **Backend**: Node.js, Express.js
- **APIs**: GitHub API
- **Deployment**: AWS Lambda, API Gateway, S3

## 📂 Project Structure

```
gitstaller/
├── backend/
│   ├── server.js          # Express server
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables
├── frontend/
│   ├── src/
│   │   ├── App.js         # Main React component
│   │   ├── App.css        # Styling
│   │   └── index.js       # Entry point
│   └── package.json       # Frontend dependencies
├── README.md              # This file
└── .gitignore            # Git ignore rules
```

## 🔧 Environment Variables

Create a `.env` file in the backend folder:

```
GITHUB_API_TOKEN=your_github_token_here (optional)
PORT=5000
```

## 📊 Supported Project Types

- ✅ Node.js/JavaScript (npm, yarn)
- ✅ Python (pip, conda)
- ✅ Docker
- ✅ Ruby, PHP, Go, and more

## 🚢 Deployment (AWS)

**Build It (Local)**
```bash
# Run backend
cd backend && npm start

# Run frontend (in another terminal)
cd frontend && npm start
```

**Ship It (AWS Cloud)**
```bash
# Deploy backend to Lambda
sam init
sam deploy

# Deploy frontend to S3 + CloudFront
cd frontend
npm run build
aws s3 sync build/ s3://your-bucket/
```

## 🎓 Learning Outcomes

- REST API development with Express.js
- React frontend development
- GitHub API integration
- AWS deployment (Lambda, API Gateway)
- Git version control

## 📝 License

MIT License - feel free to use this project!

## 👥 Contributors

- Built during AWS Hackathon (First Commit - Sept 2026)
- Team: Poorav Patel

## 📧 Support

- GitHub Issues: https://github.com/poorav007/gitstaller/issues
- Email: pooravpatel007@gmail.com

## 🙏 Acknowledgments

- AWS for hackathon opportunity
- WeMakeDevs community
- GitHub API documentation
