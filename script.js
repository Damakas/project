'use strict'

// Возводит в степенень каждую цифру числа аргумента "num"  и возвращает число 

function squareDigits(num){
if(typeof(num) !== 'number' || !Number.isInteger(num) || num < 0){
return 0;
}
return String(num)
.split('')
.map(digit => Math.pow(parseInt(digit), 2))
.join('');
}
console.log(squareDigits(765));




