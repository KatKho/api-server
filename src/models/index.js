'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

const menuItems = require('./menu-item.js');
const restaurants = require('./restaurants.js');

// Import the Collection class for handling database operations
const Collection = require('./Collection.js');

// Define the connection string for the SQL database, fallback to SQLite in memory if not provided
const SQL_CONNECTION_STRING = process.env.SQL_CONNECTION_STRING || 'sqlite:memory:';

// Create a new Sequelize instance to establish a database connection
const sequelize = new Sequelize(SQL_CONNECTION_STRING);

// Define the models for menu items and restaurants
const MenuItemModel = menuItems(sequelize, DataTypes);
const RestaurantModel = restaurants(sequelize, DataTypes);

// Create associations between menu items and restaurants
// MenuItemModel belongs to RestaurantModel, using 'restaurantId' as the foreign key
MenuItemModel.belongsTo(RestaurantModel, { foreignKey: 'restaurantId', targetKey: 'id' });
// RestaurantModel has many MenuItemModel records, using 'restaurantId' as the foreign key
RestaurantModel.hasMany(MenuItemModel, { foreignKey: 'restaurantId', sourceKey: 'id' });

// Export the Sequelize instance and collections for menu items and restaurants
module.exports = {
  sequelize,
  MenuItemTable: new Collection(MenuItemModel),    
  RestaurantTable: new Collection(RestaurantModel), 
};
