/*
  Vinci tu!
  Scrivi un programma che simula un gioco di dadi tra due utenti, prendi in input il numero di quanti tiri effettuare per ciascun giocatore (N), dopodiché ogni utente tira N volte un dado a sei facce.
  Stampa il vincitore che ha totalizza più punti.
  http://www.imparareaprogrammare.it
*/
/*Tiro il dado N volte, quindi lo faccio da 0 a N. La mia variabile si incrementa fino al numero di tiri deciso
i++ significa "fai un altro tiro"
Per ogni tiro ottengo un risultato che va immagazzinato in una variabile punteggio ed infine le N variabili punteggio vanno a sommarsi per
ottenere il totale. Tutto ciò va iterato due volte che è il numero di giocatori
*/

var players = 2;
var tiri = 3;
var somma=0;

for (var j=1; j<=players; j++) {
  for(var i=0; i<tiri; i++) {
    var dado = (Math.ceil((Math.random()*60)/10));
    var somma = somma + dado;
  }
  console.log('il giocatore numero ' + j + ' ha totalizzato ' + somma);
  somma = 0;
}
