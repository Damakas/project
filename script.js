'use strict'

function nameUser(name){
   return console.log('Привет, ' + name)
}
nameUser('Жора');


function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5))



function getMathResult(num,times) {
if(typeof(times) !== 'number' || times <= 0){
   return num;
}

let str = '';

for(let i = 1; i <= times; i++){
   if( i === times){
      str += `${num * i}`;
   }else{
      str += `${num * i}---`;
   }
}

return str;
}

getMathResult(5,10)
console.log(getMathResult(1,10))



