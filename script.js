'use strict'

// localStorage.setItem('number', 5);// Записывает данные в Local storage в виде ключа и его значения как объект

// // localStorage.removeItem('number') // Удаляет ключ 
// localStorage.clear(); // Очищает все хранилицще

// console.log(localStorage.getItem('number'));// Получает данные из Local Storage

//Меняет цвет в при нажатии на кнопку и сохраняет в localStorage

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

//Как Сохранить JSON в localStorage

const persone = {
    name: 'Alex',
    age: 25
}

const seralizedPersone = JSON.stringify(persone);
localStorage.setItem('alex', seralizedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));