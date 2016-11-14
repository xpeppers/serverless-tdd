'use strict';

const MovieRepository = require('./movie-repository');

class MovieService {
  constructor(movieRepository) {
    this.movieRepository = (typeof movieRepository !== 'undefined') ?  movieRepository : new MovieRepository();
  }

  getMovies() {
    return this.movieRepository.findAll()
      .then((movies) => {
        return {
          statusCode: 200,
          body: JSON.stringify(movies)
        };
      });

  }
}

module.exports = MovieService;
