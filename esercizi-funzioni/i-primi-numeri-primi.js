/*
  I primi numeri… primi!
  Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
  Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi. Per farlo puoi richiamare la prima funzione.
    Input : 5
    Output:
            2
            3
            5
            7
            11
  http://www.imparareaprogrammare.it
*/
var numero = 11;
var array = [];
var resto = [];

//Funzione che definisce se un certo valore è un numero Primo
//Restituisce true se è numero primo, false in caso contrario
function numeriPrimi(x) {
  for (var i = 2; i < x; i++) {
    resto[i] = x%i;
}
  var index = resto.indexOf(0);;
  return index==-1;
}
console.log(numeriPrimi(numero));

//Applico la funzione di cui sopra a tutti i numeri da 1 fino ad un valore incognito
//Genero un array di valori dove i numeri NON primi hanno assegnato il valore 0
//Elimino gli zeri dall'array e prendo solo i numeri primi che mi interessano
//cioè tanti quanti sono prima del numero assegnato all'inizio
var j = 0;
while (array.length < numero) {
  j++;
    if (numeriPrimi(j) == true) {
    array[j] = j;
  } else {
    array[j] = 0;
}
}

var filtered = array.filter(function eliminaGliZeri(element){
  return (element != 0);
});

console.log(filtered);
