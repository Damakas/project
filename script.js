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