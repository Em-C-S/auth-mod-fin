'use strict';

const express = require('express');
const cors = require('cors');
const errorHandler = require('./error-handlers/500.js');
const authRoutes = require('./routes/auth.js');
const app = express();

app.use(express.json());
app.use(cors());
app.use(authRoutes);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Two beers authorized'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
