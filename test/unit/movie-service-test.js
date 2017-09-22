const chaiAsPromised = require('chai-as-promised');
const { expect } = require('chai').use(chaiAsPromised);
const sinon = require('sinon');
const MovieService = require('../../lib/movie-service');

describe('MovieService', function () {
  it('get movies from repository', function () {
    const movies = [{ Title: 'Test Title' }];
    const moviesJson = '[{"Title":"Test Title"}]';

    const movieRepository = sinon.stub();
    movieRepository.findAll = sinon.stub().returns(Promise.resolve(movies));
    const movieService = new MovieService(movieRepository);

    return expect(movieService.getMovies()).to.eventually.eql(moviesJson);
  });
});
