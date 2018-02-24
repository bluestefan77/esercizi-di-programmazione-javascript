/*
  Tanti numeri
  Scrivi un programma che dato un insieme di valori in un array, calcolai la media dei valori e restituisca in output tutti i valori minori della media.
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.
  http://www.imparareaprogrammare.it
*/

/*Come prima cosa ho bisogno di un array di valori in input*/
var valori = [5,8,6,7,8,2,1,12];
/*A questo punto devo calcolare la media dei valori dell'array: mi serve la lunghezza, cioè il numero degli elementi e la somma*/
var sum = valori.reduce((a, b) => a + b, 0);
var media = sum/(valori.length);
console.log('La media dell\'array è: ' + media);
var filtered = valori.filter(function lessThanAverage(val) {
  return (val < media);
});
console.log('L\'array con i valori inferiori alla media è: ' + filtered);
console.log('I valori minori della media sono ' + filtered.length + ', i valori maggiori sono ' + (valori.length - filtered.length));
