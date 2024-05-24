'use strict'



//Метод сортировки sort() и пример как сортировать элементы в виде чисел массива 
const arr = [ 2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr)

function compareNum(a, b){
  return a - b;
}

//Как работает свойства length с массивом
arr[99] = 0;
console.log(arr.length)
console.log(arr)


//Метод forEach позволяет перебирать элементы массива и изменять их с помощью функции обратного вызова
arr.forEach(function(item, i, arr){
console.log(`${i}: ${item} внутри массива ${arr}`)
})

//Удаляет последний элемент из массива
arr.pop();


//Добавляет элемент в конец массива
// arr.push(10);
// console.log(arr) //Выведет [1, 2, 3, 6, 8, 10]

//Первый способ перебора элементов массива
for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

//Второй способ перебора элемнтов массива с помощью цикла for of
for(let value of arr) {
console.log(value)
}

//Пример работы с методом split() который разделяет строки на подстроки и метод join() который объеденяет элементы массива с строку
const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));
