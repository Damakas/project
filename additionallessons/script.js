'use strict';

// Аттрибуты(флаги) свойств объекта

// writable        если будет true,то свойство можно изменить,если false ,то только для чтения
// enumerable      если стоит true , то свойство будет перечислятся в циклах,если false то циклы будут его игнорировать
// configurable    если стоит true,то свойство можно удалить,а аттрибуты можно изменить,если false,то нельзя


const user = {
    name: 'Alex',
    surname: 'Smith',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`)
    }
}
// Object.defineProperty(user, 'birthday', { value: prompt('Date?'), enumerable: true, configurable: true });// Метод который редактирует флаги свойства или создает новые свойства

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));//Метод который показывает флаги определенного свойства

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));//Метод который показывает флаги определенного свойства


Object.defineProperty(user, 'showMyPublicData', { enumerable: false })

for (let key in user) console.log(key)

Object.defineProperties(user, {
    name: { writable: false },
    surname: { writable: false }
})

// Object.defineProperty(user, 'name', { writable: false });// Метод который редактирует флаги свойства
// Object.defineProperty(user, 'gender', { value: 'male' });// Метод позволяет создать новое свойство с указанным флагом,если не указать флаг,то они автоматически все будут false
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));


