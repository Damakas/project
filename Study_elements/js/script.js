'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
      //Как с помощью JS изменить элемент к которому мы обратились
    //   box.style.backgroundColor = 'blue';
    //   box.style.width = '500px';

    //Как записать сразу несколько изменений css в одну строку
      box.style.cssText = `background-color: blue; width: 500px`

       btns[1].style.borderRadius = '100%';
       circles[0].style.backgroundColor = 'red';

       //Как произвести действие сразу над несколькоми элементами

       //Первый вариант,устаревший
    //    for (let i = 0; i < hearts.length; i++){
    //     hearts[i].style.backgroundColor = 'blue';
    //    }

    //Второй вариант современный
    hearts.forEach(item => {
        item.style.backgroundColor = 'blue';
    });

    //Основные методы для работы со страницей

//Метод позволяющий создать элемент с помощью JS ,данный элемент существует только в JS
    const div = document.createElement('div');
    // const text = document.createTextNode('Тут был я')

//Свойство,которое предоставляет удобный интерфейс для работы с классами элемента.
//Позволяет легко добавлять,удалять,переключать (toggle) и проверять наличие классов у элемента.
    div.classList.add('black');

    //Метод позволяющий добавлять элементы в указанный тег,по умолчанию добавляет в конец
    wrapper.append(div);
    //Устаревший метод 'append' 
    //wrapper.appenChild(div)

    //Вариант как вставить элемент во внутрь указанного блока
    // document.querySelector('.wrapper').append(div);

    //Метод который работает как и 'append' с одним отличием,он элемент вставляет в начало блока
    wrapper.prepend(div);

    //Вставляет элемент перед указанным тегом
hearts[0].before(div)

//Вставляет элемент после указанного тега
    hearts[0].after(div)

//Устаревший метод 'after & before'
// wrapper.insertBefore(div, hearts[0]);



    //Метод который удаляет элемент
    circles[0].remove();

    //Устарвеший метод удаления
    // wrapper.removeChild('hearts[1])

    //Метод который позволяет заменить один элемент на другой
    //Первое  указывает элемент который хотим изменить и второй элемент на который хотим заменить
    hearts[0].replaceWith(circles[0]);

    //Устаревший метод замены элементов
    //wrapper.replaceChild(circles[0], hearts[0]);


    //Метод который позволяет редактировать элементы
    div.innerHTML = '<h1>Hello World</h1>';

    //Второй метод для редактировпния элемента
    //Добавляет или изменяет только текст
    div.textContent = '<h1>Hello World</h1>';

//Метод позволяющий вставлять HTML-код в определенное место относительно существубшего элемента в DOM
   div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); 