const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function (films){
  const filmTitles = this.films.map((film) => {
    return film.title;
  });
  console.log(filmTitles);
  return filmTitles;
}



module.exports = Cinema;
