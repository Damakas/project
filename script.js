'use strict';

// Как узнать размеры элементов на странице 

const box = document.querySelector('.box'),
      btn = document.querySelector('button')  

const width = box.clientWidth;
const height = box.clientHeight;

const width = box.offsetWidth;
const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;
console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

//Как узнать кординаты всех элементов на странице
console.log(box.getBoundingClientRect().top);


// Как узнать все стили элемента
const style = window.getComputedStyle(box);

console.log(style.display);

// Фото с разметкой и методами на странице index.html


