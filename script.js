'use strict'


const soldier = {
health: 400,
armor: 100,
sayHello : function(){
    console.log('Hello')
}
};
//Создание объекта john с прототипом в качестве  soldier
const john = Object.create(soldier);

//Присвоение объекту john прототип в качестве soldier
const john = {
    health: 100,
};
john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier)

john.sayHello();