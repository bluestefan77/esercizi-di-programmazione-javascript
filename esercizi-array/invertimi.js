/*
  Invertimi
  Scrivi un programma che prenda in input un numero N generi una serie di N numeri all'interno di un array, stampa la serie di numeri ma invertendola.

  Variente
  Non utilizzare array di appoggio per inversione.
  http://www.imparareaprogrammare.it
*/

var N = 5;
var serie = [];

for (var i = 0; i < N; i++) {
  serie[i] = Math.round(Math.random()*10);
}
console.log(serie);
console.log(serie.reverse());
