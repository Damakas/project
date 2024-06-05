'use strict';

// После фигурных скобок вписывается время паузы перед объявлением.
// Через запятую можно записать что либо в качестве аргумента функции
const timerId = setTimeout(function(text) {
    console.log(text);
}, 2000, 'Hello');


// Функцию можно добавлять как аргумент в метод setTimeout
const timerId = setTimeout(logger, 2000);

function logger () {
    console.log('text')
}


btn.addEventListener('click', () => {
    // const timerId = setTimeout(logger, 2000);
     timerId = setInterval(logger, 500);
});


// Останавливает setTimeout и setInterval
clearInterval();


function logger () {
    if ( i === 3){
        clearInterval(timerId);
    }
    console.log('text')
    i++;
}



// Разница между обычным setTimeout и рекурсивным в том,что обычный setTimeout не будет ждать 
// функцию если функция выполняется дольше таймера setTimeout
// А рекурсивный setTimeout будет начинать отсчет только после того,как функция закончит свою работу

// Рекурсивный setTimeout

let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log,500)
}, 500);


// Как это работает

const btn = document.querySelector('.btn');
 let timerId,
     i = 0;   

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10)
    function frame() {
        if (pos === 300) {
            clearInterval(id);
        }else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
btn.addEventListener('click', myAnimation);