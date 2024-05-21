'use strict'

//Напишите фукнцию min(a,b),которая возвращает наименьшее из чисел a и b.

function min(a,b){
   if(a < b){
      return a
   }else{
      return b
   }
};

console.log(min(8,4))


//Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
//Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.


// Моё перворе решение

function pow(x,n){
   x = +prompt("Укажите первое число");
   n = +prompt('Укажите второе число');
   let sum = x ** n
  if(x && n >= 1){
   return sum;
   } else{
     return console.log('Только натуральные числа')
   }
}
alert(pow())


// Решение по учебнику

function pow(x,n){
let result = x;

   for (let i = 1; i < n; i++){
      result *= x;
   }
   return result;
};

let x = prompt('x?','');
let n = prompt('n?','');

if(n >= 1 && n % 1 == 0){
alert( pow(x, n) );
}else{
   alert(`Степень ${n} не поддерживается, используйте натуральное число`)
};


