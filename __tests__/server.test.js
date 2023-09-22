const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelize } = require('../src/models/');
const request = supertest(app);

// Before all tests run, synchronize the database tables
beforeAll(async () => {
  await sequelize.sync(); // sets up our tables before tests run
});

// After all tests have completed, drop the database tables
afterAll(async () => {
  await sequelize.drop(); // removes the tables we set up for our test environment
});

// Start describing the test suite
describe('Testing our server router!', () => {
  // Tests for /restaurants

  // Test: POST request to /restaurants
  test('Should POST from /restaurants', async () => {
    let response = await request.post('/api/restaurant').send({
      name: 'New',
      location: 'Seattle',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('New');
  });

  // Test: GET request to /restaurants
  test('Should GET from /restaurants', async () => {
    let response = await request.get('/api/restaurant');
  
    expect(response.status).toEqual(200);
    expect(response.body.results.length).toEqual(1);
  });

  // Test: PUT request to /restaurants/:id
  test('Should PUT from /restaurants/:id', async () => {
    let response = await request.put('/api/restaurant/' + 1).send({
      name: 'Update',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Update');
    expect(response.body.location).toEqual('Seattle');
  });

  // Test: DELETE request to /restaurants/:id
  test('Should DELETE from /restaurants/:id', async () => {
    let response = await request.delete('/api/restaurant/' + 1);

    expect(response.status).toEqual(200);
    console.log('RESPONSE BODY', response.body);
    expect(response.body).toEqual({result: 'deleted'});
  });

  // Test: GET request to make sure restaurant id is gone
  test('Make Sure restaurant id gone', async () => {
    let response = await request.get('/api/restaurant');

    expect(response.status).toEqual(200);
    expect(response.body.results.length).toEqual(0);
  });

  // Tests for /menu-items

  // Test: POST request to /menu-items
  test('Should POST from /menu-items', async () => {
    let response = await request.post('/api/menu-item').send({
      name: 'TEST',
      description: 'Delicious',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('TEST');
  });

  // Test: GET request to /menu-items
  test('Should GET from /menu-items', async () => {
    let response = await request.get('/api/menu-item');
  
    expect(response.status).toEqual(200);
    expect(response.body.results.length).toEqual(1);
  });

  // Test: PUT request to /menu-items/:id
  test('Should PUT from /menu-items/:id', async () => {
    let response = await request.put('/api/menu-item/' + 1).send({
      name: 'Update',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Update');
    expect(response.body.description).toEqual('Delicious');
  });

  // Test: DELETE request to /menu-items/:id
  test('Should DELETE from /menu-items/:id', async () => {
    let response = await request.delete('/api/menu-item/' + 1);

    expect(response.status).toEqual(200);
    console.log('RESPONSE BODY', response.body);
    expect(response.body).toEqual({result: 'deleted'});
  });

  // Test: GET request to make sure menu-item id is gone
  test('Make sure menu-item id gone', async () => {
    let response = await request.get('/api/menu-item');

    expect(response.status).toEqual(200);
    expect(response.body.results.length).toEqual(0);
  });

  // Test: Return 404 for a bad route
  test('Should return 404 for a bad route', async () => {
    let response = await request.get('/api/bad-route');
    expect(response.status).toEqual(404);
  });

  // Test: Return 404 for a bad method /restaurants (PATCH)
  test('Should return 404 for a bad method /restaurants (PATCH)', async () => {
    let response = await request.patch('/api/restaurant/1');
    expect(response.status).toEqual(404);
  });

  // Test: Return 404 for a bad method /menu-items (PATCH)
  test('Should return 404 for a bad method /menu-items (PATCH)', async () => {
    let response = await request.patch('/api/menu-item/1');
    expect(response.status).toEqual(404);
  });
});
