const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getTitles = function(){  
  const result = this.films.map( (film)=>{ return film.title } )
  return result; 
  // this one all good
  }

//write out for loops to do it then translate to these


Cinema.prototype.getFilm = function(filmName){
  

  // filter if you  are looking for more than one thing

  // use find if you are looking for one thing

  return this.films.find((film) => {
    return film.title === title;
  });

  
  // we did - 
  //
  // const result = this.films.reduce((film)=>{ 
  //   if( film.title == filmName)
  //   {
  //     return film;
  //   }
  // })
  // return result;
}


// COME BACK TO THIS!!!!
Cinema.prototype.getFilmsByGenre = function(genre){
  
  return this.films.filter(() => {
    return film.genre === genre
  })
  
  // we did
  // let filmsResultByGenre = [];
  // const result = this.films.filter((film)=>{
  //   if( film.genre == genre)
  //   {
  //     filmsResultByGenre.push(film.title);
  //   }
  // })
  // // console.log(filmsResultByGenre);
  // return filmsResultByGenre;
}

Cinema.prototype.areThereFilmsByYear = function(year){

  return this.films.some((film) => {
    return film.year === year
  })

  // const result = this.films.filter((film)=>{
  //   if(film.year == year){
  //     return film.title
  //   }
  // })
  // if (result.length == 0){
  //   return false;
  // }
  // else {
  //   return true;
  // }

}

Cinema.prototype.areAllFilmsOver = function(length){

  return this.films.every((film) => {
    return film.length > length
  })

  // const result = this.films.filter((film)=>{
  //   if(film.length < time){
  //     return film.title
  //   }
  // })
  // if (result.length == 0){
  //   return true
  // }
  // else {
  //   return false
  // }
}

Cinema.prototype.totalRunTime = function(){
  // total = 0; // if we don't do this it thinks that total is an object

  return this.films.reduce((total, film) => { 
    return total + film.length
  }, 0) // this assigns total an initial value for total

  // BE CAREFUL with reduce, check that 0 at the end
  // 


  //let total = this.films.reduce((runningTotal, film)=>{ return runningTotal + film.length; })

  // var totalTime = 0;

  // this.films.forEach((film)=>{
  //   totalTime+=film.length;
  // })


  
  //let total = this.films.reduce(function(runningTotal, film){ return runningTotal + film.length; }); // => 7

  // we Had
  // let total = this.films.reduce((runningTotal, film)=>{ return runningTotal + film.length; 
  // })

  // arr = [ 1, 2, 4 ];
  // arr.reduce(function(a, b){ return a + b; }); // => 7

  // console.log(total);

  

  // for (var currentFilm of this.films){
  //     totalTime+=currentFilm.length;
  // }
  // return totalTime;

}

Cinema.prototype.allFilmsThisYear = function(year){
  // const result = this.films.filter((film)=>{
  //   if(film.length < time){
  //     return film.title
  const result = this.films.filter((film)=> film.year == year ) 
  return result;
  
}

module.exports = Cinema;


// filter, map, reduce, find, some, every 