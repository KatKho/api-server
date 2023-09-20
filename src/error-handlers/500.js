'use strict';

const errorHandler500 = (err, req, res, next) => {
  console.log ('SERVER ERROR', err);
  res.status(500).send('Server Error');
};

module.exports = errorHandler500; 