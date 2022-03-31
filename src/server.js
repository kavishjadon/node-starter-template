const express = require('express');
const cors = require('cors');
const { port, logger } = require('./config');
const routesV1 = require('./api/v1/routes');

const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1', routesV1);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { status, code, message } = err;

  res
    .status(status)
    .json({
      code,
      message: status === 500 ? 'Oops, something went wrong' : message,
    });
});

app.listen(port, () => logger.info('server started on port 4000'));
