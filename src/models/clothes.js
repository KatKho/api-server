'use strict';


const Clothes = (sequelize, DataTypes) => sequelize.define('Clothes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Clothes;