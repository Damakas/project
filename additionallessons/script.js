'use strict';

const boxesQuery = document.querySelectorAll('.box');


//matches Иcпользуется для проверки по указанному Css-селектору
boxesQuery.forEach(box => {
    if (box.matches('.this')) console.log('This one!')
});


//Метод ищет у своих родителей ближайший селектор по указаннмоу классу вверх по коду
console.log(boxesQuery[0].closest('.wrapper'))

