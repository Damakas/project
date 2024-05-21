'use strict'

let numbersOfFilms;

function start(){
 numbersOfFilms = +prompt('Сколько фильмов вы уже просмотрели?',"");

 while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)){
      numbersOfFilms = +prompt('Сколько фильмов вы уже просмотрели?',"");
 }
}

start();

const personalMovieDB = {
       count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB(){
   while( personalMovieDB.privat = false){
      console.log(personalMovieDB)
   }
}

showMyDB();

function writeYourGenres(){
     for(let i = 1; i <= 3; i++){
         const userQuestion = prompt(`Ваш любимый жанр под номером ${i}`);
         personalMovieDB.genres[i] = userQuestion;
       }
}

writeYourGenres();


   function rememberMyFilms(){
for(let i = 0; i < 2; i++){
   const a = prompt('Один из последних просмотренных фильмов?',""),
         b = prompt('На сколько оцените его?',"");
   
         if(a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
         }else{
            console.log('error');
            i--;
         }
   }
   }

   rememberMyFilms();


function detectPersonalLevel(){
if(personalMovieDB.count < 10){
   console.log('Просмотренно довольно мало фильмов');
}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
   console.log('Вы классический зритель')
}else if (personalMovieDB.count >= 30){
   console.log('Вы киноман');
}else {
   console.log("Произошла ошибка")
}

}

detectPersonalLevel();

console.log(personalMovieDB)