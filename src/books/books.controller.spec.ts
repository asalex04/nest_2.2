import * as request from 'supertest';

const baseURL = 'http://localhost:7000/';

describe('Todo', () => {
  const apiRequest = request(baseURL);


  describe('GET: todo/all', () => {
    it('should have the response', async () => {
      const response = await apiRequest.get('/');

      expect(response.status).toBe(200);
    });
  });
})

