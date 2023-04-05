/*DÍA 8
En este desafío debes desarrollar una implementación personalizada del método map utilizando funciones de orden superior.

Recibirás como parámetros un array y una función (func). El array contendrá un conjunto de elementos (números, objetos, strings, etc.) y la función se utilizará para aplicar una acción sobre cada elemento del array. Tu objetivo es devolver un nuevo array con los resultados de la función tal y como lo haría el método map.

Ejemplo 1:

Input: myMap([1,2,3,4], (num) => num * 2)

Output: [2,4,6,8]

Ejemplo 2:

Input: myMap([
  {name: "michi", age: 2},
  {name: "firulais", age: 6}],
  (pet) => pet.name)

Output: ["michi", "firulais"]
*/


export function myMap(array, func) {

  let arreglo = [];

  for (let i = 0; i < array.length; i++){
    arreglo[i] = func(array[i]);
  }

  return arreglo;
}
