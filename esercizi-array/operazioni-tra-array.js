/*
  Operazioni tra array
  Scrivi un programma che dichiari 2 array di 10 elementi interi e li riempia con numeri casuali da 1 a 10.
  Il programma prende in input dall'utente il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Ed esegue il calcolo tra ogni elemento dei due array salvando ciascun risultato in un terzo array di appoggio.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var array1 = [];
var array2 = [];
var array3 = [];
var operazione = 'addizione';

for (var i = 0; i < 10; i++) {
array1[i] = Math.ceil(Math.random()*10);
}
console.log('Primo array: ' + array1);

for (var i = 0; i < 10; i++) {
array2[i] = Math.ceil(Math.random()*10);
}
console.log('Secondo array: ' + array2);

switch (operazione) {
  case 'addizione':
    for (var i = 0; i < 10; i++) {
      array3[i] = array1[i] + array2[i];
    }
    break;
  case 'sottrazione':
  for (var i = 0; i < 10; i++) {
    array3[i] = array1[i] - array2[i];
  }
    break;
  case 'moltiplicazione':
  for (var i = 0; i < 10; i++) {
    array3[i] = array1[i] * array2[i];
  }
    break;
  case 'divisione':
  for (var i = 0; i < 10; i++) {
    array3[i] = array1[i] / array2[i];
  }
    break;
  default:
  console.log('Scegli un\'operazione tra addizione, sottrazione, moltiplicazione, divisione.');
}
    console.log('Il risultato è: ' + array3);
