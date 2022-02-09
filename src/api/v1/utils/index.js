const errors = require('./errors');

const snakeToPascal = (string) => string
  .toLowerCase()
  .split('_')
  .map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join('');

module.exports = { snakeToPascal, errors };
