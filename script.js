'use strict'

for (let i = 5; i <= 10; i++){
    console.log(i)
}9

for (let i = 20; i > 10; i--){
    if(i === 13){
    break;
}
    console.log(i)
}

for (let i = 2; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}


let i = 2;

while(i < 16){
i++
if(i % 2 === 1){
    console.log(i)
}
}


let arr =[];

for(let i = 5; i <= 10; i++){
    arr[i - 5] = i;
}
console.log(arr)

console.log(arr[0])
