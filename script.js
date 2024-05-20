'use strict'

// for(let i = 1; i < 100; i++){
//    if( i % 3 === 0 && i % 5 === 0){
//       console.log('BuzzFizz')
//    }else if(i % 3 === 0){
//       console.log('Fizz')
//    }else if(i % 5 === 0) {
//     console.log('Buzz')
//    }else{
//     console.log(i)
//    }
// };



// for(let i = 1; i < 50; i++){
//    if(i % 2 === 0){
//       console.log(i)
//    }
// };

// for(let i = 1; i < 50;  i++){
//    if(i % 2 === 1){
//       console.log(i)
//    }
// };


// const firstNumber = prompt('Укажите первое  число');
// const secondNumber = prompt('Укажите второе число');
// const sum = firstNumber + secondNumber;
// console.log(`${firstNumber} + ${secondNumber} = ${sum}`)

// const userNumber = prompt('Укажите число');
// for(let i = 1; i <= userNumber; i++){
// console.log(i)
// }

// const userNumber = +prompt('Укажите число');
// for(let i = userNumber; i >= 1; i--){
// console.log(i)
// }

// const firstNumber = +prompt('Первое число');
// const secondNumber = +prompt('Второе число');

// if(firstNumber > secondNumber){
//    console.log(`Наибольшее число : ${firstNumber}`)
// } else if(firstNumber < secondNumber){
//    console.log(`Наибольшее число : ${secondNumber}`)
// }else{
//    console.log('Числа равны')
// }


const userNumber = +prompt('Введите число');
let isPrime = true;

for(let i = 2; i < userNumber; i++){
   if(userNumber % i === 0){
      isPrime = false;
      break;
   }
}
if(isPrime){
   console.log('Yes')
}else{
   console.log('No')
}


