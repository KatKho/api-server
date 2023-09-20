'use strict';

const errorHandler404 = ( req, res) => {
  console.log ('NOT FOUND');
  res.status(404).send('Not Found');
};

module.exports = errorHandler404; 