/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/


setTimeout(() => {
    console.log('timeout')
});

Promise.resolve()
    .then(() => console.log('promise'));

queueMicrotask(() => console.log('wow'));

Promise.resolve()
    .then(() => console.log('promise_2'));

console.log('code');
setTimeout(() => {
    console.log('timeout2')
});

//последовательность выполнения задач

// () => {} // macrotask
// microtasks: then/catch/finally/await
// render
//() => {}
// microtasks: then/catch/finally/await
// render
// () => {}
/******/ })()
;
//# sourceMappingURL=bundle.js.map