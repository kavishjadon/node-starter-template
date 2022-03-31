const jwtLib = require('jsonwebtoken');

const snakeToPascal = (string) => string
  .toLowerCase()
  .split('_')
  .map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join('');

const jwt = {
  sign: jwtLib.sign,
  decode: jwtLib.decode,
  verify: (token, secret) => new Promise((res) => {
    jwtLib.verify(token, secret, (err, decoded) => res([err, decoded]));
  }),
};

module.exports = { snakeToPascal, jwt };
