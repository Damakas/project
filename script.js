'use strict'


//Примитивы с помощью переменных передют друг друу значения которые независимы друг от друга
let a = 5,
    b = a;

  b = b + 5;

  console.log(b);
  console.log(a)

  const obj = {
    a: 5,
    b: 1,
  };

  //А объекты,массивы,функции не могут копираовать друг друга с помощью тех же переменных,они передют ссылки,если изменить переменную на которую ты передал объект ,изменится и источник 
  const copy = obj;// Передет ссылку

  copy.a = 10;

  console.log(copy);
  console.log(obj);

//Как с помощью функции копировать объект
  function copy(mainObj){
  let objCopy = {};

  let key;
  for(key in mainObj){
    objCopy[key] = mainObj[key]
  }

  return objCopy;
  }

  const numbers = {
    a: 2,
    b: 5,
    c: {
      x: 7,
      y: 4
    }
  };

  const newNumbers = copy(numbers);

  newNumbers.a = 10;
  

  console.log(newNumbers);
  console.log(numbers);

  //Как с помощью метода Object.assigh() соединять два и более объктов  в однин

  const numbers = {
    a: 2,
    b: 5,
    c: {
      x: 7,
      y: 4
    }
  };

  const add = {
    d: 17,
    e: 20,
  };

  // console.log(Object.assign(numbers,add));


  // Как с помощь метода Object.assign() клонировать объект
 const clone = Object.assign({}, add);

 clone.d = 20;

 console.log(add);
 console.log(clone);

 //Как с помощью метода slice() сделать поверхностную копию массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();


newArray[1] = 'dadsadas'
console.log(newArray);
console.log(oldArray);


//Оператор spred '...' передает все элементы из массивов video и blogs в массив internet
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet)


    // Оператор spread (...) передает элементы из массива num в аргументы функции log
      function log(a, b , c){
        console.log(a);
        console.log(b);
        console.log(c);
      }

      const num = [2, 5, 7];

      log(...num)

      //Как с помощь оператора spread '...' создать копию массива
      const array = ['a', 'b'];
      const newAarray = [...array];
      console.log(newAarray)

      //Как с помощью оператора spread '...' создать копию объекта
      const q = {
        one: 1,
        two: 2
      };
      const newObj = {...q};
      console.log(newObj)


   