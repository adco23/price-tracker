const { SUCCESS_OPERATION, OK } = require('../utils/MessagesConstans');

class ApiResponse {
  constructor({ data = undefined || null, message = SUCCESS_OPERATION }) {
    this.status = OK;
    this.message = message;

    if (data !== undefined && data !== null) {
      this.data = data;      
    }
  }
}

module.exports = ApiResponse;
