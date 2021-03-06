@ECHO OFF
start "Windows PowerShell" cmd /c "npm start"
start "Windows PowerShell" cmd /c "firebase emulators:start"
timeout 12 > nul
start "Windows PowerShell" cmd /c "cd react-backend && SET PORT = 3001 && node bin/www"
PAUSE
taskkill  /FI "WINDOWTITLE eq Windows PowerShell"
