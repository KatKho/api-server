'use strict';

const RestaurantModel = (sequelize, DataTypes) => sequelize.define('Restaurant', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
  },
});

module.exports = RestaurantModel;