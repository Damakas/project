'use strict'

import { one, two } from './lib.js'; //Импортирует указанные модули
import sayHi from './lib.js'
console.log(`${one} and ${two}`)
sayHi();


// import *  as data from './lib'; // Импортирует все модули из файла
// console.log(`${data.one} and ${data.two}`) // Иипортирует все модули из файла
// data.sayHi(); // Иипортирует все модули из файла

