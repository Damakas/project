'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let userMovie = prompt('Один из последних просмотренных фильмов?');
let userGrade = +prompt('На сколько оцените его?');
let user1Movie = prompt('Один из последних просмотренных фильмов?');
let user1Grade = +prompt('На сколько оцените его?');

personalMovieDB.movies[userMovie] = userGrade
personalMovieDB.movies[user1Movie] = user1Grade

console.log(personalMovieDB)

if (4 == 9){
    console.log('ok!')
} else{
console.log('Error')
}


if(num < 49){
    console.log('Error');
} else if(num >100){
    console.log('Много');
}else {
    console.log('Ok')
}

(num === 50) ? console.log('Ok!') : console.log('Error')

const num = 50;

switch (num){
    case 49: 
        console.log('Неверно');
        break;  
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');      
         break;
    default:
        console.log('Не в этот раз');
        break;
}
