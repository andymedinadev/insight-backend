function sendResponse({ res, data, message = "OK", status = 200 }) {
  return res.status(status).json({
    success: true,
    data,
    message,
  });
}

function sendError({ res, err, message = "Error", status = 500 }) {
  let errorMessage;

  if (typeof err === "string") {
    errorMessage = err;
  } else if (err instanceof Error) {
    errorMessage = err.message;
  } else if (err?.message) {
    errorMessage = err.message;
  }

  const response = {
    success: false,
    message,
    ...(errorMessage && { error: errorMessage }),
  };

  return res.status(status).json(response);
}

module.exports = { sendResponse, sendError };
