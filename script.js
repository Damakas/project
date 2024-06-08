'use strict';

const box = document.querySelector('.box');

// Условия для отслеживание
let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords);
});

// Отслеживание нужного эелемента
observer.observe(box, {
    childList: true
});

// Отключение от отлслеживания 
observer.disconnect();

