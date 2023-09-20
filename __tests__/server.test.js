const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelize } = require('../src/models/');
const request = supertest(app);
const { FoodModel, ClothesModel } = require('../src/models'); 

// built in jest function, setup our test suite
beforeAll(async () => {
  await sequelize.sync(); // sets up our tables before tests run
});
afterAll(async () => {
  await sequelize.drop(); // removes the tables we set up for our test environment
});

// A reusable function to create CRUD tests for a specific route
function createCrudTests(routePath, modelName) {
  describe(`Testing the ${modelName} routes`, () => {
    test('Should return a 404 status code on a bad route', async () => {
      const response = await request.get(`/invalid-route`);
      expect(response.status).toEqual(404);
    });

    test('Should return a 404 status code on a bad method (POST)', async () => {
      const response = await request.post(`/`);
      expect(response.status).toBe(404);
    });

    test('Should return a 404 status code on a bad method (PUT)', async () => {
      const response = await request.put(`/${routePath}`);
      expect(response.status).toBe(404);
    });

    test('Should return a 404 status code on a bad method (DELETE)', async () => {
      const response = await request.delete(`/${routePath}`);
      expect(response.status).toBe(404);
    });

    test('Should create a record using POST', async () => {
      const response = await request.post(`/${routePath}`).send({ name: 'NewItem', type: 'Type' });
      expect(response.status).toBe(201);
    });

    test('Should read a list of records using GET', async () => {
      const response = await request.get(`/${routePath}`);
      expect(response.status).toBe(200);
    });

    test('Should read a record using GET', async () => {
      const newItem = await modelName.create({ name: 'TestItem', type: 'TestType' });
      const response = await request.get(`/${routePath}/${newItem.id}`);
      expect(response.status).toBe(200);
    });

    test('Should update a record using PUT', async () => {
      const newItem = await modelName.create({ name: 'TestItem', type: 'TestType' });
      const response = await request.put(`/${routePath}/${newItem.id}`).send({ name: 'UpdatedItem', type: 'UpdatedType' });
      expect(response.status).toBe(200);
    });

    test('Should destroy a record using DELETE', async () => {
      const newItem = await modelName.create({ name: 'TestItem', type: 'TestType' });
      const response = await request.delete(`/${routePath}/${newItem.id}`);
      expect(response.status).toBe(204);
    });
  });
}

createCrudTests('food', FoodModel);
createCrudTests('clothes', ClothesModel);
