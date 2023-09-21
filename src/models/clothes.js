'use strict';

// This page creates a table-structured 'blueprint' that created data models - aka model.

// creates a model using Sequelize named 'Clothes'
const Clothes = (sequelize, DataTypes) =>
  sequelize.define('Clothes', {
    // create a column in the 'Clothes' table
    name: {
      // the datatype of the values associated with this column
      type: DataTypes.STRING,
      // this means the name column is required, it cannot be omitted
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      // in this instance, the type column is not required
      allowNull: true,
    },
  });
// exports Clothes so it can be used elsewhere
module.exports = Clothes;
