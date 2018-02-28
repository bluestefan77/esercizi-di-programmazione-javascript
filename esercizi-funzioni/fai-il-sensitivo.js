/*
  Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre argomenti numerici, A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B: restituis

  Variante
  Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti: vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.
  http://www.imparareaprogrammare.it
*/

var A = 4;
var B = 60;
var N = Math.ceil(Math.random()*100);

function distanzaNumerica(x,y,z) {
  var distanza = Math.abs(x-z);
  var output;
  if (distanza < Math.abs(y-z)) {
    output=-1;
  } else if (distanza == Math.abs(y-z)) {
    output=0;
  } else {
    output=1;
  }
  return output;
}
console.log(A,B,N);
console.log(distanzaNumerica(A,B,N));
