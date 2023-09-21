'use strict';

// This page is a 'barrel roll' file, here's a description from ChatGPT:

// "This code sets up a Sequelize connection to a database, creates instances
// of the Food and Clothes models using the provided Sequelize instance and DataTypes,
// and exports them along with the Sequelize instance for use in other parts of the
// application."

// These three lines import modules from Sequelize, and import Food and Clothes models
const { Sequelize, DataTypes } = require('sequelize');
const Food = require('./food.js');
const Clothes = require('./clothes.js');
// configures SQL connection string to use a variable from a .env file or a sqlite database
const SQL_CONNECTION_STRING =
  process.env.SQL_CONNECTION_STRING || 'sqlite:memory:';
// creates a Sequelize instance that is connecting to the database
const sequelize = new Sequelize(SQL_CONNECTION_STRING);
// exports the Sequelize instance as well as the Food and Clothes models
module.exports = {
  sequelize,
  // the Food and Clothes models are both passing the same arguments: sequelize, which was
  // instantiated on line 18, and DataTypes, which is an object from Sequelize that the model uses
  // to define the datatype of a column
  FoodModel: Food(sequelize, DataTypes),
  ClothesModel: Clothes(sequelize, DataTypes),
};
