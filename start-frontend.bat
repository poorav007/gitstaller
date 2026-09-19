@echo off
echo ========================================
echo   Starting Gitstaller Frontend (React)
echo ========================================
echo.

cd /d "%~dp0frontend"

if not exist "node_modules" (
    echo ERROR: node_modules not found!
    echo Please run "npm install" in the frontend folder first.
    echo.
    pause
    exit /b 1
)

echo Starting React development server...
echo.
echo Your browser will open automatically when ready
echo The app will be available at http://localhost:3000
echo.
echo Keep this window open while using Gitstaller
echo Press Ctrl+C to stop the frontend server
echo.
echo ========================================

npm start

pause
