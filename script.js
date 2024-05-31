'use strict'

  //Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// //Решение с использованием цикла
// function cycleSum(x){
// let result = 0;

//   for(let i = 1; i <= x; i++){
//    result += i
//   }
//   return result;
// }
// console.log(cycleSum(100))


// //Решение с использованием рекурсии
// function sumTo(n){
//   if( n === 1) {
//     return 1;
//   }else {
//     return n + sumTo(n - 1);
//   }
// };

// console.log(sumTo(100))



// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//  }
//  console.log(fib(50))

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  console.log(list.value); // выводим текущий элемент

  if (list.next) {
    printList(list.next); // делаем то же самое для остальной части списка
  }

}

printList(list);