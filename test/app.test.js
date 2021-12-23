const request = require('supertest');

const app = require('../src/app');

test('should be able to respond at the root', () => {
  return request(app).get('/')
    .then((res) => {
      expect(res.status).toBe(200);
    });
});
