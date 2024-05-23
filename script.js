'use strict'

//Верните "Even" , если аргумент ялвяется четным и "Odd" если не четное 

function evenOrOdd(number) {
  if(number % 2 == 0){
    return 'Even'
  }else{
    return 'Odd'
  }
}
console.log(evenOrOdd(2))

function greet(name){
  return `Hello, ${name} how are u doing today`
}
console.log(greet('Vasea'))


//Напишите функцию которая расчитывает массу тела

function bmi(weight, height) {

  let userHeight = height / 100;
let result = weight / (userHeight ** 2);
  if(result <= 18.5){
    return 'Underweight'
  }else if(result <= 25.0){
    return 'Normal'
  }else if(result <= 30.0){
    return 'Overweight'
  }else {
    return 'Obese'
  }
}
console.log(bmi(120,177))


//Разделите каждое слова строки с выделением '';

function stringToArray(string){
return string
.split(' ')
}

console.log(stringToArray("I love arrays they are my favorite"))

// Сделайте так,что бы при указании года возвращалось столетие

function century(year) {
 
  return Math.ceil(year / 100);
}

console.log(century(1900))




function squareSum(numbers){
return numbers.reduce(function(sum, n){
  return (n*n) + sum;
},0)
}
console.log(squareSum(122))


// Написать функцию которая считает овец в наличии,то есть true и возвращает общее количество 

function countSheeps(sheep) {
let sum = sheep.reduce(function sumSheeps(total,numSheep){
  if(numSheep === true){
    return total + 1;
  }else{
    return total
  }
  
}, 0)

return sum;
}

var sheepArray = [true,  true,  true,  false,
                  true,  true,  true,  true ,
                  true,  false, true,  false,
                  true,  false, false, true ,
                  true,  true,  true,  true ,
                  false, false, true,  true ];

var sheepCount = countSheeps(sheepArray);
console.log(sheepCount)


// Короткое решение предыдущей задачи

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}


//

function lovefunc(flower1, flower2){
  if(flower1 % 2 === 0 && flower2 % 2 === 1 ){
    return true;
  }else if(flower1 % 2 === 1 && flower2 % 2 === 0){
return true;
  }else{
    return false;
  }
}
console.log(lovefunc(3,3));