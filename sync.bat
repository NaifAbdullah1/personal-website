@echo off
ECHO.
ECHO Starting S3 Sync...
aws s3 sync dist/ s3://naifsitebucket
IF %ERRORLEVEL% NEQ 0 (
  ECHO Error uploading files to S3! Check permissions and bucket configuration.
  EXIT /B %ERRORLEVEL%
)

