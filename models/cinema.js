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





module.exports = Cinema;
