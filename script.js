'use strict';

//Передает в консоль дату
const now = new Date();
console.log(now)

const now = new Date();
new Date.parse('2020-05-01');

// Устанавливает нужное время
console.log(now.setHours(18, 50));
console.log(now)

// Основные методы Data();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

// Получения метода по поясу UTC
console.log(now.getUTCHours());

// Метод который вычисляет разницу между UTF и UTC
console.log(now.getTimezoneOffset());

// Метод который вычисляет количество прошедших миллисекунд с 1 января 1970 года
console.log(now.getTime());


// Как вычислить время вычисления 
let start = new Date();

for (let i = 0; i < 10000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`)