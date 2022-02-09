const { snakeToPascal } = require('./index');

const errorTypes = [
  ['VALIDATION_ERROR', '400', 'Validation for data provided failed'],
  ['DUPLICATE_ENTRY', '400', 'One of the fields provided is already taken'],
  ['UNAUTHORIZED', '401', 'You are not authorized to access this resource'],
];

const errors = {};

errorTypes.forEach((errorType) => {
  errors[snakeToPascal(errorType[0])] = class extends Error {
    constructor(message) {
      super(message || errorType[2]);
      [this.code, this.status] = errorType;
      this.message = message || errorType[2];
    }
  };
});

module.exports = errors;
