const ApiError = require('../errors/ApiError.js');

function errorMiddleware(err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      code: err.statusCode,
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    code: 500,
    status: 'error',
    message: 'Error interno del servidor',
  });
}

module.exports = errorMiddleware;
