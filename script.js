'use strict'

const numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?')

const personalMovieDB = {
    count : numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat : false
}
let userMovie = prompt('Один из последних просмотренных фильмов?');
let userGrade = prompt('На скольк оцените его?');

personalMovieDB['movies'] = `'${userMovie}': '${userGrade}'`

console.log(personalMovieDB.count)
console.log(personalMovieDB.movies)