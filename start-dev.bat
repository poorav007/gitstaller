@echo off
echo ========================================
echo   Starting Gitstaller (Full Stack)
echo ========================================
echo.
echo This will launch both:
echo   1. Backend Server (port 5000)
echo   2. Frontend React App (port 3000)
echo.
echo Two windows will open - keep both running!
echo.
echo ========================================
echo.

cd /d "%~dp0"

REM Check if node_modules exist in both directories
if not exist "backend\node_modules" (
    echo ERROR: Backend dependencies not installed!
    echo Please run: cd backend ^&^& npm install
    pause
    exit /b 1
)

if not exist "frontend\node_modules" (
    echo ERROR: Frontend dependencies not installed!
    echo Please run: cd frontend ^&^& npm install
    pause
    exit /b 1
)

echo Starting Backend Server...
start "Gitstaller Backend" cmd /k "cd /d "%~dp0backend" && npm start"

timeout /t 3 /nobreak >nul

echo Starting Frontend Server...
start "Gitstaller Frontend" cmd /k "cd /d "%~dp0frontend" && npm start"

echo.
echo ========================================
echo   Gitstaller is starting!
echo ========================================
echo.
echo Two terminal windows have opened:
echo   - Gitstaller Backend (Express server)
echo   - Gitstaller Frontend (React app)
echo.
echo The app will open in your browser automatically
echo at http://localhost:3000
echo.
echo To stop: Close both terminal windows or press Ctrl+C in each
echo.
pause
