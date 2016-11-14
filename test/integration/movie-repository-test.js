const chaiAsPromised = require("chai-as-promised");
const expect = require('chai').use(chaiAsPromised).expect;
const sinon = require('sinon');
const MovieRepository = require('../../lib/movie-repository');

describe('MovieRepository', function() {
  it('loads movies from file', function() {
    const movies = [{ Title: 'Test Title' }];
    movieRepository = new MovieRepository('test/integration/test-movies.json');

    return expect(movieRepository.findAll()).to.eventually.eql(movies);
  });
});
