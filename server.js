'use strict';

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middlewares/logger.js');
const v1Routes = require('./routes/v1.js');
const authRouter = require('./routes/auth-route.js');
const server = require('./index.js');

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(server);
app.use(cors());
app.use(logger);

// app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRouter);
app.use('/api/v1', v1Routes);

// error-handlers
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: this.app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
