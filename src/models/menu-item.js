'use strict';

const MenuItemModel = (sequelize, DataTypes) => sequelize.define('MenuItem', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = MenuItemModel;
