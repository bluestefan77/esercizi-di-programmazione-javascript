/*
  Azzecca e azzera
  Scrivi un programma che dichiari un array di 100 elementi interi e lo riempia con numeri casuali da 1 a 50.
  Permetti all'utente di inserire una serie di numeri e azzera tutti i numeri nell'array principale che contengono un multiplo del numero inserito.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var arrayCentoElementi = [];
var numeroUtente = 2;
var k = 1;
var arrayUtente = [numeroUtente];


for (var i = 0; i < 100; i++) {
  arrayCentoElementi[i] = Math.ceil(Math.random()*50);
}
console.log('L\'array casuale è: ' + arrayCentoElementi);
console.log('Il numero utente è: ' + arrayUtente);

for (var i = 0; i < 100; i++) {
  while (arrayCentoElementi[i] != 0) {
    numeroUtente = Math.ceil(Math.random()*50);
    arrayUtente[k] = numeroUtente;
    k++;
    for (var j = 0; j < 100; j++) {
      if (arrayCentoElementi[j] % numeroUtente == 0) {
      arrayCentoElementi[j] = 0;
}
}
}
}

console.log('L\'array finale è: ' + arrayCentoElementi);
console.log('L\'array utente è: ' + arrayUtente);
