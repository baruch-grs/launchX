const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);
describe('Test suite for basic express exercise', () => {
  test('Case 1. Response the GET method in root path', (done) => {
    supertest(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('Case 2. Testing endpoints sending text', async () => {
    const res = await request.get('/launchX');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Bienvenidos a LaunchX');
  });

  test('Case 3. Testing endpoints sending an object', async () => {
    const res = await request.get('/explorersInNode');
    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe('Hello');
  });
  test('Case 4. Testing endpoints with query params', async () => {
    const res = await request.get('/explorers/:explorerName');
    expect(res.statusCode).toBe(200);
    console.log(req.params);
  });
});