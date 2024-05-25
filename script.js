'use strict'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

//1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

function showFamily(arr) {
    let str = 'Семья состоит из: ';
    if(arr.length === 0 ){
        return 'Семья пуста'
    }else{
   return str += arr.join(' ');
    }
}
console.log(showFamily(family));


// напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let result = arr.map(item => item.toLowerCase());
        return console.log(result.join('\n'));
}
standardizeStrings( favoriteCities);