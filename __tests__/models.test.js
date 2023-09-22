'use strict';

const { sequelize, RestaurantTable, MenuItemTable } = require('../src/models');

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('Testing the Model Associations', () => {
  let restaurant;
  let menuItem;

  test('Should be able to create a restaurant with a menu item', async () => {

    restaurant = await RestaurantTable.create({
      name: 'Starbucks',
      location: 'Seattle',
    });
    menuItem = await MenuItemTable.create({
      name: 'Pumpkin Spice Latte',
      restaurantId: restaurant.id,
    });

    expect(restaurant.name).toEqual('Starbucks');
    expect(menuItem.name).toEqual('Pumpkin Spice Latte');
    expect(menuItem.restaurantId).toEqual(restaurant.id);
  });

  test('Should be able to fetch a restaurant and include all menu items', async () => {

    restaurant = await RestaurantTable.read(restaurant.id, { include: MenuItemTable.model });

    console.log(restaurant.MenuItems);
    expect(restaurant.name).toEqual('Starbucks');
    expect(restaurant.MenuItems).toBeTruthy();
    expect(restaurant.MenuItems[0].name).toEqual('Pumpkin Spice Latte');
  });
});