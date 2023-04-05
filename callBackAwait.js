//DÍA 11
//exercise.js
import { doTask1, doTask2, doTask3 } from './tasks';

// Nota que las funciones doTask1, doTask2, doTask3 cambiaron 👆🏻

export async function runCode() {
  const rta1 = await doTask1();
  const rta2 = await doTask2();
  const rta3 = await doTask3();
  return [rta1, rta2, rta3];
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
