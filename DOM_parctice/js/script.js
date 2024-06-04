'use strict';

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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

  


const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),    
      genre =  poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      menuList = document.querySelector('.promo__menu-list'),
      addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]');


      addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        let favorite = checkbox.checked;
if(newFilm){

        if(newFilm.length > 21) {
            newFilm = `${newFilm.slice(0, 22)}...`
        };

        if(favorite) {
            console.log('Добавляем любимый фильм')
        }

            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);
    createMovieList(movieDB.movies,movieList);
    
}

event.target.reset();
            
           
      });

      

      function addRemove(target){
        target.forEach(item => {
        item.remove();
      });
      };
      
function promoChanges(genrePromo,posterPromo){
  genrePromo.textContent = 'Драма';          
      
posterPromo.style.backgroundImage = 'url(file:///d%3A/project/DOM_parctice/img/bg.jpg)';
};


function sortArray(target){
 target.sort();
}
         

function createMovieList(film, parent) {
parent.innerHTML = '';

sortArray(movieDB.movies);

         film.forEach((item,i) => {
                       parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}: ${item}
                            <div class="delete"></div>
                        </li>`
          });

          document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () =>{
                item.parentElement.remove();
                movieDB.movies.splice(i, 1)

                createMovieList(film, parent)
            });
          });
}

         


addRemove(adv);
promoChanges(genre,poster);
sortArray(movieDB.movies);
createMovieList(movieDB.movies,movieList);



