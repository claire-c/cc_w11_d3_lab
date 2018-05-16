const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function (){
  const filmTitles = this.films.map((film) => {
    return film.title;
  });
  console.log(filmTitles);
  return filmTitles;
}

Cinema.prototype.getFilmByTitle = function (filmTitle){
  const correctFilm = this.films.filter((film) => {
    return film.title === filmTitle
  });
    return correctFilm;
}

Cinema.prototype.filterFilmsByGenre = function (genre){
  const films = this.films.filter((film) => {
    return film.genre === genre
  });
    return films;
}

Cinema.prototype.filterFilmsByYear = function (year){
  const films = this.films.filter((film) => {
    return film.year === year
  });
    return films;
}

Cinema.prototype.filmLength = function (length){
  const films = this.films.filter((film) => {
    return film.length >= length
  });
  return films;
}

Cinema.prototype.totalFilmLength = function (){
  const totalLength = this.films.reduce((total, film) => {
    return total + film.length;
  }, 0);
  return totalLength;
}

Cinema.prototype.filmsByProperty = function (property, value) {
  const films = this.films.filter((film) => {
    return film[property] === value
  });
    return films;
}


module.exports = Cinema;
