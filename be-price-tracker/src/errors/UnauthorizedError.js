const ApiError = require('./ApiError');

class UnauthorizedError extends ApiError {
  constructor(description = 'No autorizado') {
    super('UnauthorizedError', 401, true, description);
  }
}

module.exports = UnauthorizedError;
