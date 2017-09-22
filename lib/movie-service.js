const MovieRepository = require('./movie-repository');

class MovieService {
  constructor(movieRepository = new MovieRepository()) {
    this.movieRepository = movieRepository;
  }

  getMovies() {
    return this.movieRepository.findAll()
      .then((movies) => {
        return JSON.stringify(movies);
      });
  }
}

module.exports = MovieService;
