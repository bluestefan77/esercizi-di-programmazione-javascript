/*
  Conta il numero
  Scrivi una funzione che prenda in input un numero intero e restituisca il numero di cifre presenti.
    Input : 9999
    Output:
            4
  Hint: puoi convertire il tipo di dato
  http://www.imparareaprogrammare.it
*/

var input = 154287;

function contaCifre(x) {
  var string = input.toString();
  return string.length;
}

console.log(contaCifre(input));
