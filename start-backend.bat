@echo off
echo ========================================
echo   Starting Gitstaller Backend Server
echo ========================================
echo.

cd /d "%~dp0backend"

if not exist "node_modules" (
    echo ERROR: node_modules not found!
    echo Please run "npm install" in the backend folder first.
    echo.
    pause
    exit /b 1
)

echo Starting Express server on port 5000...
echo.
echo Keep this window open while using Gitstaller
echo Press Ctrl+C to stop the backend server
echo.
echo ========================================

npm start

pause
