# 🚀 Gitstaller Quick Start Guide

## ⚠️ Important: Project Location

Your Gitstaller project is located at:
```
C:\Users\Hp\OneDrive\Desktop\gitstaller
```

You must navigate to this directory before running any npm commands!

---

## 🎯 Three Ways to Start Gitstaller

### Option 1: Double-Click Method (Easiest! 👍)

Perfect for non-technical users:

1. **Start Backend**: Double-click `start-backend.bat` in the project folder
2. **Start Frontend**: Double-click `start-frontend.bat` in the project folder
3. **Or Start Both**: Double-click `start-dev.bat` to launch everything at once!

✅ That's it! Your browser will automatically open to http://localhost:3000

---

### Option 2: Windows Command Prompt (cmd.exe)

1. **Open Command Prompt** (search "cmd" in Windows)

2. **Navigate to project:**
```cmd
cd C:\Users\Hp\OneDrive\Desktop\gitstaller
```

3. **Start Backend** (in current window):
```cmd
cd backend
npm start
```
✅ You should see: `✅ Gitstaller backend running on port 5000`

4. **Start Frontend** (open NEW Command Prompt window):
```cmd
cd C:\Users\Hp\OneDrive\Desktop\gitstaller\frontend
npm start
```
✅ Browser will automatically open to http://localhost:3000

---

### Option 3: Git Bash

1. **Open Git Bash** in the gitstaller folder (right-click → "Git Bash Here")

2. **Start Backend** (in current window):
```bash
cd backend
npm start
```
✅ Backend runs on http://localhost:5000

3. **Start Frontend** (open NEW Git Bash window):
```bash
cd frontend
npm start
```
✅ Frontend opens at http://localhost:3000

---

## 🧪 Testing Gitstaller

Once both servers are running:

1. Open http://localhost:3000 in your browser
2. Enter a GitHub repository URL:
   ```
   https://github.com/facebook/react
   ```
3. Click "🚀 Generate Installation Guide"
4. You should see a detailed installation guide appear!

---

## ❌ Common Errors & Solutions

### Error: "Cannot find path specified"
**Problem:** You're in the wrong directory  
**Solution:** Make sure you navigate to the full path:
```cmd
cd C:\Users\Hp\OneDrive\Desktop\gitstaller
```

### Error: "ENOENT: no such file or directory, open 'package.json'"
**Problem:** You're not in the backend or frontend folder  
**Solution:** 
```cmd
cd backend    # or cd frontend
```

### Error: "Port 5000 already in use"
**Problem:** Backend is already running  
**Solution:** Close the backend terminal and restart it

### Error: "Port 3000 already in use"
**Problem:** Frontend is already running  
**Solution:** 
- Press `Ctrl+C` in the frontend terminal
- Or close the terminal and open a new one

---

## 🛑 Stopping the Servers

To stop either server:
1. Go to the terminal window running that server
2. Press `Ctrl + C`
3. Type `Y` if prompted

---

## 📦 What's Running?

When Gitstaller is running, you have:

| Service | URL | Purpose |
|---------|-----|---------|
| Backend API | http://localhost:5000 | Analyzes GitHub repos |
| Frontend UI | http://localhost:3000 | User interface |

---

## 🆘 Still Having Issues?

1. **Check Node.js is installed:**
   ```cmd
   node --version
   ```
   Should show v14 or higher

2. **Check npm is installed:**
   ```cmd
   npm --version
   ```

3. **Reinstall dependencies:**
   ```cmd
   cd backend
   npm install
   
   cd ../frontend
   npm install
   ```

4. **Check the README.md** for more detailed documentation

5. **Create a GitHub issue**: https://github.com/poorav007/gitstaller/issues

---

## 🎉 Next Steps

Once you have Gitstaller running:

- Try analyzing different GitHub repositories
- Share the installation guides with friends
- Deploy to AWS for production use
- Submit to the AWS Hackathon!

**Happy coding! 🚀**
