@echo off
ECHO Running build...
npm run build
IF %ERRORLEVEL% NEQ 0 (
  ECHO Build failed! Fix errors and try again.
  EXIT /B %ERRORLEVEL%
)
