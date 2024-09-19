const { NOT_FOUND } = require('../utils/MessagesConstans');
const ApiError = require('./ApiError');

class NotFoundError extends ApiError {
  constructor(description = NOT_FOUND) {
    super('NotFoundError', 404, true, description);
  }
}

module.exports = NotFoundError;
