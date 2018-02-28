/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.
    Input : 123456, 3
    Output:
            4
  http://www.imparareaprogrammare.it
*/

var N = 125865;
var K = 3;

function cercaNumero (x,y){
  var array = x.toString().split(''); //converto prima in numero e poi in array
  return array[array.length-y];
}

console.log(cercaNumero(N,K));
