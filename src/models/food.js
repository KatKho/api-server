'use strict';

// Does the same thing as clothes.js, but in this case it's for a different table named 'Food'.

const Food = (sequelize, DataTypes) =>
  sequelize.define('Food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

module.exports = Food;
