const { expect } = require('chai');
const supertest = require('supertest');
const movies = require('../../movies.json');

const endpoint = process.env.ENDPOINT || 'http://localhost:3000';
const client = supertest(endpoint);

describe('get movies', function () {
  it('return movie list', function () {
    return client
      .get('/movies')
      .expect(200)
      .then((res) => {
        expect(res.body).to.eql(movies);
      });
  });
});
