const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function () {
    const films = cinema.getFilmTitles();
    const actual = films[0];
    assert.strictEqual(actual, "Moonlight");
    assert.strictEqual(films.length, 5);
  });

  it('should be able to find a film by title', function (){
    const actual = cinema.getFilmByTitle("T2 Trainspotting");
    assert.strictEqual(actual[0].title, "T2 Trainspotting");
  });

  it('should be able to filter films by genre', function () {
    const actual = cinema.filterFilmsByGenre("drama");
    assert.strictEqual(actual.length, 2);
  });

  it('should be able to check whether there are some films from a particular year', function (){
    const actual = cinema.filterFilmsByYear(2017);
    assert.strictEqual(actual.length, 3);
  });


  it('should be able to check whether there are no films from a particular year', function (){
    const actual = cinema.filterFilmsByYear(2000);
    assert.strictEqual(actual.length, 0);
  });

  it('should be able to check whether all films are over a particular length', function () {
    const actual = cinema.filmLength(100);
    assert.strictEqual(actual.length, 4);
  });

  it('should be able to calculate total running time of all films');

});

module.exports = Cinema;
