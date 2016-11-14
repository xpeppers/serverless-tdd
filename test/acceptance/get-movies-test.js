const expect = require('chai').expect;
const supertest = require('supertest-as-promised');
const endpoint  = process.env.ENDPOINT ? process.env.ENDPOINT : 'http://localhost:3000/movies';
const api = supertest(endpoint);

describe('get movies', function() {
  it('return movie list', function() {
    movies = require('../../movies.json');
    return api.get('/')
      .expect(200)
      .then((res) => {
        expect(res.body).to.eql(movies);
      });
  });
});
