class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.mesage = message;
    this.success = statusCode < 400;
  }
}
