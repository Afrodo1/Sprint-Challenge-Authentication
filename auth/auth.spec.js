const request = require('supertest');
const server = require('../api/server');

const db = require('../database/dbConfig');

beforeEach(async () => {
  await db('users').truncate();
});

test('returns true', () => {
  expect(true).toBe(true);
});

describe('POST / REGISTRATION TESTS', () => {
  it('should return status 201 on registration', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({ username: 'name', password: 'password' });

    expect(res.status).toBe(201);
    expect(res.type).toBe('application/json');
  });
  it('Should return 500 if missing body request parameters on registration', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({ username: 'no username' });

    expect(res.status).toBe(500);
  });
});

describe('login', () => {
  it('Should return 200 if provided with valid user and data', async () => {
    await request(server)
      .post('/api/auth/register')
      .send({ username: 'name', password: 'password' });

    const response = await request(server)
      .post('/api/auth/login')
      .send({ username: 'name', password: 'password' });

    expect(response.status).toEqual(200);
    expect(response.type).toBe('application/json');
    expect(response.body.username).toMatch('name');
  });
  it('Should return 401 if missing body request parameters on log in', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({ username: 'no username' });

    expect(res.status).toBe(401);
    expect(res.body).toEqual({ message: 'Invalid Credentials'});
  });
});