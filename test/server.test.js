const supertest = require('supertest');

const request = supertest('http://localhost:3001');

test('should be able to respond on port 3001 ', () => {
  return request.get('/')
    .then((res) => expect(res.status).toBe(200));
});
