ECHO Deploying...
:: Build the React application for production
npm run build

:: Check for build errors (optional)
IF EXIST "%errorlevel%" (
  ECHO Build failed! Fix errors and try again.
  EXIT /B 1
)

ECHO Starting S3 Sync...
aws s3 sync dist/ s3://naifsitebucket

:: Check for S3 sync errors (optional)
IF EXIST "%errorlevel%" (
  ECHO Error uploading files to S3! Check permissions and bucket configuration.
  EXIT /B 1
)

ECHO Deployment completed!