'use strict'

const options = {
name: 'test',
width: 1024,
height: 1024,
colors: {
  border: 'black',
  bg: 'red'
},
makeTest: function(){
  console.log('Test')
}
};

options.makeTest();

//Декструктуризация объекта
const{border, bg} = options.colors;
console.log(border)


//Преобразуем объект в массив с помощью метоба Object.keys() и подсчитывает количество ключей в объекте с помощью свойства length
console.log(Object.keys(options).length)

//Как обратится к объекту внутри объекта и вернуть значение
console.log(options['colors']['border'])

//Оператора delete удаляет элемент из объекта

delete options.name;
console.log(options);


//Перебираем объкет с помощью цикла for in
//В переменной counter подсчитываем количество ключей в объекте

let counter = 0;

for(let key in options){
  if(typeof(options[key]) === 'object'){
    for(let i in options[key]){
      console.log(`Свойство ${i} имеет значение ${options[key][i]} `)
      counter++;
    }
  }else{
console.log(`Свойство ${key} имеет значение ${options[key]} `);
counter++;
  }
  
}
console.log(counter)