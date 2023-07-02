const ERRORTYPES = {
  ERROR: "Error",
  WARN: "Warn"
}

const errorHandler = (errorType, errorCode, errorMessage) => {
  console.warn(`[${errorType}${errorCode && ": " + errorCode}]: ${errorMessage}`);
}

export default errorHandler;
export {ERRORTYPES, errorHandler};