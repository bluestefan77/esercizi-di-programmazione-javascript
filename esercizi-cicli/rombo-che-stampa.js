/*
  Rombo che stampa!
  Scrivi un programma che riceva in input un numero dispari e stampi un rombo di lettere partendo dal valore, in questo modo:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X
  Hint: per indentare puoi usare il tab con '\t'.
  http://www.imparareaprogrammare.it
*/
/*
Sulla prima riga lascio uno spazio formato da (n-1)/2 buchi poi una X ed ancora lo stesso spazio
sulla seconda riga lascio uno spazio formato da ((n-1)/2 -1) buchi poi una X e via
Quando il risultato dell'operazione è uguale ad n inverto il trend.
Non è dato sapere in anticipo quante iterazioni ci saranno perché non so il numero
che l'utente andrà ad inserire, per cui utilizzo un ciclo while invece di un ciclo for
*/
var n = 7; /*rappresenta il numero di input */
var i = 1;
var empty = ' ';
var full = 'X';
var emptySpace;
var fullSpace;

while (i < n) {
  var j  = ((n - i) / 2);
  fullSpace = full.repeat(i);
  emptySpace = empty.repeat(j);
  console.log(emptySpace + fullSpace + emptySpace);
  i = i+2;
}
while (i >= 1) {
  var j  = Math.abs((n - i) / 2);
  fullSpace = full.repeat(i);
  emptySpace = empty.repeat(j);
  console.log(emptySpace + fullSpace + emptySpace);
  i = i-2;
}
