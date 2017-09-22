const MovieService = require('./lib/movie-service');

module.exports.movies = (event, context, callback) => {
  const movieService = new MovieService();
  movieService.getMovies()
    .then((movies) => {
      const response = {
        statusCode: 200,
        body: movies
      };
      callback(null, response);
    });
};
