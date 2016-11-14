'use strict';

const fs = require('fs');

class MovieRepository {
  constructor(filename) {
    this.filename = (typeof filename !== 'undefined') ?  filename : 'movies.json';
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
