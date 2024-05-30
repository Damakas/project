'use strict';

//Обращение к элементу по ID
const box = document.getElementById('box');

console.log(box)

//Обращение к элепенту по тегу
//Создается псевдомассив со всем кнопками из HTML документа
//Что бы обратиться к определенной кнопке,нужно обратиться к ее индексу пример ниже
const btns = document.getElementsByTagName('button')[0];

console.log(btns);

//Обращение к элементу с помощью класса
const circles = document.getElementsByClassName('circle');
console.log(circles);


//Современный метод обращения к элементам
//Более удобный и имеет больше возможностей
//Поволяет получить все эелементы документа
//Совмещает в себе предыдущие два метода
const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});


//Работает так же как и предыдущий метод,кроме того,что получает только один элемент,первый по счету
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

