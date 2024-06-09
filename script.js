'use strict';
// 1.
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// 2.
// const object = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this)
//         }
//         shout();
//     }
// }

// object.sum();

// 3.
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello! " + this.name);
//     };
// }
// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//     console.log(this);  
//     console.log(this.name + surname)
// }

// const user = {
//     name: 'John',
// };

// sayName.call(user, 'Smith');// Метод call вызывает функцию с указанным this и передает ей аргументы
// sayName.apply(user, ['Smith']); // Похож на метод call, но есть одно важное отличие: apply принимает массив аргументов вместо списка.

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2); // Метод bind используется для создания новой функции,которая при вызове будет иметь определенное значение this и, возможно,частично примененные аргумены
// console.log(double(3));
// console.log(double(13));


// // 1) Обычная функция: this = window, но если use strict - undefined; 
// // 2) Контекст у методов объекта - сам объект
// // 3) this в конструкторах и классах - это новый экземпляр объекта
// // 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');
btn.test = 1;

// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'red';
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);
//         };
//         say();
//     }
// }

// obj.sayNumber();

// const double = a => a * 2;

// console.log(double(4))

btn.addEventListener('click', (event) => {
console.log(event)
});



