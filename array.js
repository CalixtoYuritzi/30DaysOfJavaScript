/*DÍA 13
En este desafío, tu objetivo es encontrar un valor específico en un array de dos dimensiones.

La función searchValue recibirá dos parámetros: un array bidimensional y un valor a buscar. Tu tarea será implementar la lógica necesaria para encontrar el valor y retornar un objeto con las propiedades row y column que indicarán la posición del valor dentro del array bidimensional.

Si el valor no se encuentra en la matriz, la función deberá lanzar un error con el mensaje "Valor no encontrado". Recuerda que la sintaxis para lanzar errores es la siguiente

throw new Error("Valor no encontrado");

Ejemplo 1:


Input:

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const value = 5

searchValue(array, value)

Output:

{
  row: 1,
  column: 1,
}

Ejemplo 2:


Input:

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const value = 45;

Output: "Valor no encontrado"
*/

export function searchValue(array, value)
{
  let flat = array.flat(1).includes(value);
  if (!flat)
    throw new Error("Valor no encontrado");

  let rta;
  const result = array.map((array, index) => {
    if (array.includes(value))
      rta = { row: index, column: array.indexOf(value) }
  });
  return rta;
}
