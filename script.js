'use strict'

Переписать функцию в два варианта.С использованием тернарного оператора "?" и оператора или "||"

function checkAge(age){
   if(age > 18){
      return true
   }else{
      return confirm('Родители разрешили?')
   }
}

function checkAge(age){
return (age > 18) ? true : confirm ('Родители разрешили?') ;
}
console.log(checkAge(15))


function checkAge(age){
  return (age >= 18 || confirm('Родители разрешили?'))
}
alert(checkAge(18))




