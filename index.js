const MovieService = require('./lib/movie-service');

module.exports.movies = (event, context, callback) => {
  const movieService = new MovieService();
  movieService.getMovies()
    .then((response) => {
      callback(null, response);
    });
};
