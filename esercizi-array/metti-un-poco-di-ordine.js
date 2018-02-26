/*
  Metti un po' d'ordine
  Scrivi un programma che data un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Variante
  Prova ad ordinali in modo crescente.
  http://www.imparareaprogrammare.it
*/

var array = [];

for (var i = 0; i < 10; i++) {
array[i] = Math.ceil(Math.random()*10);
}
console.log('Primo array: ' + array);

array.sort(function(a, b) {
  return b-a;
});
console.log('L\' array ordinato in ordine decrescente è: ' + array);

array.sort(function(a, b) {
  return a-b;
});
console.log('L\' array ordinato in ordine crescente è: ' + array);
