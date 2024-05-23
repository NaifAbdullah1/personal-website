@echo off
ECHO Starting Deployment
ECHO.

:: Calling build script
call build.bat
IF %ERRORLEVEL% NEQ 0 (
    ECHO Build script failed! Exiting deployment.
    EXIT /B %ERRORLEVEL%
)

:: Call the sync script
call sync.bat
IF %ERRORLEVEL% NEQ 0 (
    ECHO Sync script failed! Exiting deployment.
    EXIT /B %ERRORLEVEL%
)

ECHO Deployment completed successfully!