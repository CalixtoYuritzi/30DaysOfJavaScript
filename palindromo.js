/*DÍA 5
En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras.

Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista, la función debe devolver null. Si hay más de un palíndromo con la misma longitud máxima, debes devolver el primer palíndromo encontrado en la lista.

Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como hacia atrás.

Ejemplo 1:

Input: findLargestPalindrome(["racecar", "level", "world", "hello"])

Output: "racecar"

Ejemplo 2:

Input: findLargestPalindrome(["Platzi", "javascript", "html", "css"])

Output: null
*/

export function findLargestPalindrome(words) {
  // Tu código aquí 👈
  let largestPalindrome = "";

  for (let i = 0; i <= words.length - 1; i++) {
    let word = words[i];
    let arrWord = [...word];
    let palindrome = false;
    let normalLetters = "";
    let reverseLetters = "";

    for (let j = 0; j <= arrWord.length - 1; j++) {
      let normalLetterOfWord = arrWord[j];
      normalLetters = normalLetterOfWord;
    }

    for (let k = [arrWord.length - 1]; k >= 0; k--) {
      let letterOfWordReverse = arrWord[k];
      reverseLetters = letterOfWordReverse;
    }

    if (normalLetters === reverseLetters) {
      palindrome = true;
      let palindromeWord = "";
      palindromeWord = word;
      if (palindrome && palindromeWord.length > largestPalindrome.length) {
        largestPalindrome = palindromeWord;
      }
    }
  }

  if (largestPalindrome.length === 0) {
    largestPalindrome = null;
  }
  return largestPalindrome;

}


