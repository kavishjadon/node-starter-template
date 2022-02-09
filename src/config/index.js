const logger = require('./logger');
const devConfig = require('./development');
const stagingConfig = require('./staging');
const prodConfig = require('./production');

const env = process.env.NODE_ENV;

let envConfig = {};

if (env === 'development') envConfig = devConfig; // local computer
else if (env === 'staging') envConfig = stagingConfig; // testing server
else envConfig = prodConfig; // production

module.exports = { ...envConfig, env, logger };
