const ApiError = require('./ApiError');
const { BAD_REQUEST } = require('../utils/MessagesConstans');

class BadRequestError extends ApiError {
  constructor(description = BAD_REQUEST) {
    super('BadRequestError', 400, true, description);
  }
}

module.exports = BadRequestError;
