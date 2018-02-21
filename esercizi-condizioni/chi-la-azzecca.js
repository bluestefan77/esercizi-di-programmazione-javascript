/*
  Chi l'azzecca?
  Scrivi un programma che generi un numero casuale compreso tra 1 e 100 (zero escluso).
  Successivamente prendi in input altri due numeri di due ipotetici utenti, e comunica se uno dei due ha azzeccato il numero casuale, in caso contrario quale dei due si è avvicinato di più al numero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
/*pesco dall'urna il mio numeretto utilizzando la funzione random e moltiplicando per 100
prendo numero 1 e numero 2 e li confronto con il mio numeretto. Se non sono uguali faccio la sottrazione per vedere quale dei due è più vicino
*/
var casualNumber = Math.round(100 * Math.random());
console.log('il numero casuale è ' + casualNumber)
var firstNumber = 13;
console.log('il primo numero è ' + firstNumber)
var secondNumber = 62;
console.log('il secondo numero è ' + secondNumber)

var first = Math.abs(casualNumber-firstNumber);
var second = Math.abs(casualNumber-secondNumber);
var min=Math.min(first,second);

if (min == 0) {
  if (first == 0);
  console.log('Il primo numero è uguale a quello casuale')
} else if (second == 0) {
  console.log('il secondo numero è uguale a quello casuale');
} else {
  if (min == first) {
  console.log('Il primo numero è più vicino a quello casuale')
} else if (min == second){
  console.log('il secondo numero è più vicino a quello casuale');
}
}
