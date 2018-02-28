/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.
    Input : 5
    Output:
            120
  Hint: 5! = 5*4*3*2*1
  http://www.imparareaprogrammare.it
*/

var input = 5;
var prodotto;

function fattoriale (x) {
prodotto = input;
  for (var i = input; i > 1; i--) {
    prodotto = prodotto * (i-1);
  }
  return prodotto;
}

console.log(fattoriale(input));
