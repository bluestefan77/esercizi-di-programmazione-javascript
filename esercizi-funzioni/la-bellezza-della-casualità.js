/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.
  http://www.imparareaprogrammare.it
*/

var input = 52;

function casuale (x) {
  num = Math.round(Math.random()*input);
  return num;
}

console.log(casuale(input));
