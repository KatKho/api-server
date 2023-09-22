'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const menuItemRoutes = require('./routes/menu-item');
const restaurantsRoutes = require('./routes/restaurants');

app.use(cors());
app.use(express.json());

app.use('/api', menuItemRoutes);
app.use('/api', restaurantsRoutes);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('REST server is running!');
    });
  },
};
