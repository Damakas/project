'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// Измеряет количество классов в эелементе
console.log(btns[0].classList.length); 

// Возвращает класс эелемента 
console.log(btns[0].classList.item(1));

// Добавляет класс к элементу,можно записывать много классов через запятую
console.log(btns[1].classList.add('red')); 

// Удаляет класс из элемента
console.log(btns[0].classList.remove('blue')); 

// Позволяет добавлять класс к элементу если у него его нет,если есть,то это свойство удаляет класс
console.log(btns[0].classList.toggle('blue')); 

// Перебирает классы элемента
if (btns[1].classList.contains('red')){
    console.log('red')
}

btns[0].addEventListener('click', () => {
// if(!btns[1].classList.contains('red')){
//     btns[1].classList.add('red');
// }else {
//     btns[1].classList.remove('red');
// }

btns[1].classList.toggle('red');
});



// Делегирование событий


// С помощью класса

wrapper.addEventListener('click', (event) => {
       if(event.target && event.target.classList.contains('blue')) {
                console.log('Hello');
           }
        });


// С помощью тега
        
        wrapper.addEventListener('click', (event) => {
           if(event.target && event.target.tagName == 'BUTTON') {
                console.log('Hello');
           }
        });


        // С помощью метода сравнения matches 

         wrapper.addEventListener('click', (event) => {
           if(event.target && event.target.matches('button.red')) {
                console.log('Hello');
           }
        });


        // Сравнение делегирования событий с forEach 

        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                console.log('Hello')
            })
        })

        const btn = document.createElement('button');
        btn.classList.add('red');
        wrapper.append(btn);