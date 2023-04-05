//DÍA 11
//exercise.js
import { doTask1, doTask2, doTask3 } from './tasks';

// Nota que las funciones doTask1, doTask2, doTask3 cambiaron 👆🏻

export function runCode() {
  const strings = [];
  return doTask1()
  .then((rta1) => {
    strings.push(rta1);
    return doTask2();
  })
  .then((rta2) => {
    strings.push(rta2);
    return doTask3();
  })
  .then((rta3) => {
    strings.push(rta3);
    return strings;
  })
}


//tasks.js
// 👇 Ahora las funciónes no reciben un callback si no que son Promesas que retornan el valor.

export function doTask1() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve('Task 1'), 300);
  });
}

export function doTask2() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve('Task 2'), 300);
  });
}

export function doTask3() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve('Task 3'), 300);
  });
}
