'use strict'

// touchstart Срабатывает при возникновении касания к элементу
// touchmove Если палец начинает двигаться при касании
// touchend Когда палец открывается от элемента
// touchenter Срабатывает когда ведем пальцем по экрану и он проходит элемент на который повешено это событие
// touchleave Когда палец ушел за пределы элемента  
// touchcancel Возникает тогда,когда точка соприкосновения не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => {
const box = document.querySelector('.box');


box.addEventListener('touchstart', (e) => {
 e.preventDefault;

  console.log('start')
  console.log(e.touches)
  console.log(e.targetTouches)
  });


  box.addEventListener('touchmove', (e) => {
e.preventDefault;

console.log(e.targetTouches[0].pageX)
});


// box.addEventListener('touchend', (e) => {
// e.preventDefault;

// console.log('end')
// })
});


// Главные свойста работы с сенсорными экранами

// touches Свойство выдает список всех пальцев котоорые взаимодействуют с экраном
// targetTouches Если нас итересует количество пальцев которые взаимодействуют с конкретным элементом
// changedTouches список пальцев которые учавствуют в текущем событии