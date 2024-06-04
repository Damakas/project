'use strict'

// Задание 5: Стили и классы
// Добавление и удаление классов

// Найди элемент с ID toggle и переключай класс active при каждом клике.
// Изменение стилей

// Найди все элементы с классом box и сделай их ширину и высоту равными 100px, а цвет фона — зеленым.
// Задание 6: Создание и вставка элементов
// Создание списка

// Создай пустой список <ul> и добавь в него 5 элементов <li> с текстом "Элемент 1", "Элемент 2", и т.д.
// Вставка элемента в определенное место

// Найди элемент с ID reference и вставь перед ним новый <p> элемент с текстом "Новый параграф".
// Задание 7: Навигация по DOM (продолжение)
// Найти первого и последнего потомка

// Найди элемент с ID list и измени текст его первого и последнего дочерних элементов.
// Получить всех потомков определенного типа

// Найди элемент с классом container и получи все его дочерние <span> элементы, изменив их цвет текста на красный.
// Задание 8: Обработка событий (продолжение)
// Двойной клик

// Добавь элемент с текстом "Дважды кликни меня". При двойном клике на этот элемент изменяй его цвет текста на оранжевый.
// Наведение мыши

// Создай элемент, который при наведении мыши меняет цвет фона на желтый, а при убирании мыши — возвращает его обратно

const toggleEle = document.querySelector('#toggle'),
      boxEle = document.querySelectorAll('.box'),
      ulEle = document.createElement('ul'),
      referenceEle = document.querySelector('#reference'),
      listEle = document.querySelector('#list'),
      containerEle = document.querySelector('.container'),
      dblClick = document.querySelector('#double-click'),
      hoverEle = document.querySelector('#hover-element')

toggleEle.addEventListener('click', () => {
  toggleEle.classList.toggle('active')
});

boxEle.forEach(item => {
  item.style.cssText = 'width: 100px; background-color:green; height: 100px';
});

for(let i = 1; i <= 5; i++){
  const li = document.createElement('li');
  li.innerHTML = `Элемент ${i}`;
  ulEle.append(li)
}
document.body.append(ulEle);

const pEle = document.createElement('p');
pEle.innerHTML = 'Новый параграф';
referenceEle.before(pEle);

listEle.firstElementChild.innerHTML = 'Первый элемент';
listEle.lastElementChild.innerHTML = 'Последений элемент';

let spanContainer = containerEle.children;

for(let child of spanContainer){
  child.style.color = 'red';
};

dblClick.addEventListener('dblclick', () => {
  dblClick.style.color = 'orange';
});

hoverEle.addEventListener('mouseover', (event) => {
  hoverEle.style.backgroundColor = 'yellow';
});

hoverEle.addEventListener('mouseout', () => {
  hoverEle.style.backgroundColor = '';
});






     