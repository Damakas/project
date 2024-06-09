'use strict';


// Функция конструктор

// Создание функции-конструктора
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

// Использование функции конструктора с использованием prototype 
User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`)
}

// Добавление новых переменных для конструктора с использование оператора new
const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

//Вызов метода exit
ivan.exit();

// Вызов функции коснтруктора
ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);
