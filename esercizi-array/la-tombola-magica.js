/*
  La tombola magica
  Scrivi un programma che dichiari un array di 5 elementi e vi inserisca casualmente i valori da 1 a 90 senza ripetizioni.
  Permetti all’utente di effettuare una partita scegliendo 5 numeri a suo piacimento e verifica quanti sono presenti nella array principale, restituisci un risultato del tipo:
    1 numero uguale => estratto
    2 numeri uguali => ambo
    3 numeri uguali => terno
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
  In caso di vittoria dovrà essere stampato un messaggio adeguato a tua scelta, in caso di perdina dovrà essere concesso un nuovo tentativo senza una nuova estrazione.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

/*genero un arry di 5 elementi che inserisca valori casuali da 1 a 90*/

var numeriEstratti = [];
var numeriScelti = [1,2,3,4,5];
console.log('I numeri scelti sono: ' + numeriScelti);
var numeriUguali;

for (var i = 0; i < 5; i++) {
  var estratto = Math.ceil(Math.random()*90);
  numeriEstratti[i] = estratto;
}
console.log('I numeri estratti sono: ' + numeriEstratti);

  for (var j = 0; j < 5; j++) {
    for (var k = 0; k < 5; k++) {
      if (numeriScelti[j] == numeriEstratti[k]) {
        var indovinato = numeriEstratti[k];
        numeriUguali[j] = indovinato;
          break;
} else {
  numeriUguali[j] = 0;
}
}
}
var filtered = numeriUguali.filter (function (item) {
return (item != 0);
});
if (filtered.length == 0) {
console.log('Non hai indovinato');
} else {
  var x = filtered.length;
  switch (x) {
    case 1:
    console.log('estratto');
    break;
    case 2:
    console.log('ambo');
    break;
    case 3:
    console.log('terna');
    break;
    case 3:
    console.log('quaterna');
    break;
    case 5:
    console.log('cinquina');
    break;
  }
}
