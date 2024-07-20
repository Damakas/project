'use strict'

// new RegExp('pattern', 'flags');
// /pattern/flags

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i)) // Выведет в консоль R2D2



//Классы регулярных выражений

// \d   Ищет все цифры
// \w   Ищем все буквы или слова
// \s   Ищет все пробелы

// Обратные классы

// D   Ищет не числа
//W    Ищет не буквы
//S     Ищет любой не пробельный символ



//Флаги
// i // Если мы хотим что-то найти вне зависимости от регистра
// g // Когда пытаемся найти сразу несоклько вхождений
// m // Включает в себя многострочный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, '*')) //  Все символы введные в pass и появятся в консоли  в виде звездочек

// console.log('12-32-56'.replace(/-/g, ':')); // заменяет дефис на двоеточие 12:32:56

