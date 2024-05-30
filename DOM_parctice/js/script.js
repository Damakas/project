/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};
 const removeAd = document.querySelectorAll('.promo__adv');
 removeAd.forEach(item => {
    item.remove();
    });
    const promoGenre = document.querySelector('.promo__genre');
          promoGenre.textContent = 'Драма';
    const promoBg = document.querySelector('.promo__bg');
          promoBg.style.backgroundImage = 'url(	file:///d%3A/project/DOM_parctice/img/bg.jpg)';
    const watchedMovies = document.querySelector('.promo__interactive-list');
    const {movies} = movieDB;    
        movies.sort();
        watchedMovies.innerHTML = '';
        movies.forEach((item,index) =>{
            const li = document.createElement('li');
            li.textContent = `${index + 1}: ${item}`
            watchedMovies.append(li)
            li.classList.add('promo__interactive-item')
        });
       
       