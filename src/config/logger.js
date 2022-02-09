const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'backend-node',
  streams: [
    { path: './logs/app_logs' },
    {
      level: 'info',
      stream: process.stdout, // log INFO and above to stdout
    },
  ],
});

module.exports = logger;
