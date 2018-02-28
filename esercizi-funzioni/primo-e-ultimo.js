/*
  Primo e ultimo
  Scrivi due funzioni, una che prenda in input tre numeri e restituisca il maggiore, l'altra che restituisca il minore.

  Variante
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array, l'altra il valore minore.
  http://www.imparareaprogrammare.it
*/

function maggiore (x,y,z) {
  if (x > y) {
    var maggiore = x;
  } else {
    maggiore = y;
  }

  if (maggiore > z) {
    maggiore = maggiore;
  } else {
    maggiore = z;
  }
  return maggiore;
}

console.log(maggiore(8,5,7));
