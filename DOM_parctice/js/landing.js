'use strict'

// Задание 1: Получение элементов
// Получить элемент по ID

// Найди элемент с ID header и измени его текст на "Hello, World!".
// Получить элементы по классу

// Найди все элементы с классом item и измени их цвет текста на синий.
// Получить элементы по тегу

// Найди все <p> элементы и добавь к их тексту восклицательный знак.
// Задание 2: Манипуляция элементами
// Добавить новый элемент

// Создай новый <div> элемент, добавь ему текст "Новый элемент" и вставь его в конец тела документа.
// Удалить элемент

// Найди элемент с классом remove-me и удали его из DOM.
// Изменить атрибуты элемента

// Найди элемент с ID link и измени его атрибут href на "https://www.example.com".
// Задание 3: Навигация по DOM
// Найти родительский элемент

// Найди элемент с классом child и получи его родительский элемент, изменив его фон на серый.
// Найти дочерние элементы

// Найди элемент с ID container и получи все его дочерние элементы, изменив их шрифт на курсив.
// Найти следующий и предыдущий элемент

// Найди элемент с классом current и измени цвет текста его следующего и предыдущего соседних элементов.
// Задание 4: События
// Добавить обработчик события

// Добавь кнопку с текстом "Нажми меня". Когда на нее нажимают, пусть она показывает alert с текстом "Кнопка нажата!".
// Удалить обработчик события

// Создай кнопку, которая при клике изменяет свой текст на "Кликнут". Добавь еще одну кнопку, которая удаляет обработчик события у первой кнопки.


const header = document.querySelectorAll('#header'),
      classItem = document.querySelectorAll('.item'),
      pItem = document.querySelectorAll('p'),
      removeEle = document.querySelectorAll('.remove-me'),
      linkEle = document.querySelector('#link'),
      childEle = document.querySelector('.child'),
      containerEle = document.querySelector('#container'),
      currentEle = document.querySelector('.current'),
      alertButton = document.querySelector('#alert-button'),
      changeButton = document.querySelector('#change-button'),
      removeButton = document.querySelector('#remove-handler-button');

      for(let target of pItem){
        target.textContent += '!';
      };

    
    let newDiv = document.createElement('div');
      newDiv.textContent = 'Новый элемент';
      document.body.append(newDiv);
 
      removeEle.forEach(item => {
        item.remove();
      });

      linkEle.setAttribute('href', 'https://www.example.com');

      const parenChild = childEle.parentElement;
      parenChild.style.backgroundColor = 'gray';

      const containerChild = containerEle.children;
    Array.from(containerChild).forEach(item => {
      item.style.fontStyle = 'italic';
    });

    const nextCurrent = currentEle.nextElementSibling;
    const previousCurrent = currentEle.previousElementSibling;
    nextCurrent.style.color = 'red';
    previousCurrent.style.color = 'green';

    alertButton.addEventListener('click', () => {
      alert('Кнопка нажата')
    });

    changeButton.addEventListener('click', () => {
      changeButton.textContent = 'Кликнут';
    });

    removeButton.addEventListener('click', () => {
      alertButton.remove();
    })


     