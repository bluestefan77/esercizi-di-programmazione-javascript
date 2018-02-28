/*
  Primo e ultimo
  Scrivi due funzioni, una che prenda in input tre numeri e restituisca il maggiore, l'altra che restituisca il minore.

  Variante
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array, l'altra il valore minore.
  http://www.imparareaprogrammare.it
*/

function max(numArray) {
  return Math.max.apply(null, numArray);
}
console.log(max([1,2,3,4,8]));

function min(numArray) {
  return Math.min.apply(null, numArray);
}
console.log(min([1,2,3,4,8]));
