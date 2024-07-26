'use strict';

// Set возвращает массив без повторяющихся значений

const arr = ['Alex', 'Anna', 'Oleg', 'Alex'];

function unique(arr) { // Функция возвращает полноценный отфильтрованный массив
    return Array.from(new Set(arr))
}

console.log(unique(arr));

const set = new Set(arr);

set.add('Ivan'); // Добавляет значение в массив
console.log(set)

set.delete(value) // Удаляет значение
set.has(value) // Проверяет массив на наличие значения
set.clear() // Очищает массив
set.size; // Возвращает размер массива



for (let value of set) console.log(value)

set.forEach((value, valueAgaing, set) => {
    console.log(value, valueAgaing);
});

console.log(set.values())
console.log(set.keys());
console.log(set.entries());

