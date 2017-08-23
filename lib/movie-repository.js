const fs = require('fs');

class MovieRepository {
  constructor(filename = 'movies.json') {
    this.filename = filename;
  }

  findAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filename, 'utf8', (err, data) => {
        if (err) reject(err);
        else resolve(JSON.parse(data));
      });
    });
  }
}

module.exports = MovieRepository;
