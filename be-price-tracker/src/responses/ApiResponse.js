const { SUCCESS_OPERATION, OK } = require('../utils/MessagesConstans');

class ApiResponse {
  constructor(data, message = SUCCESS_OPERATION) {
    this.status = OK;
    this.message = message;
    this.data = data;
  }
}

module.exports = ApiResponse;
