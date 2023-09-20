'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const foodRoutes = require('./routes/food');
const clothesRoutes = require('./routes/clothes');

app.use(cors());
app.use(express.json());
app.use('/food', foodRoutes);
app.use('/clothes', clothesRoutes);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('REST server is running!');
    });
  },
};
