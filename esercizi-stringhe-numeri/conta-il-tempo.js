/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

/*
numero di secondi=3800
numero di ore = numero di secondi/3600 arrotondato a intero inferiore
numero di minuti = numero di secondi avanzati/60 arrotondato a intero inferiore
numero di secondi = numero di secondi avanzati
stampa in output il risultato
*/

var seconds = 3800;
var hours = Math.floor(seconds/3600);
var minutes = Math.floor((seconds-(hours*3600))/60);
var finalseconds = seconds - 60*minutes - 3600*hours;

console.log(seconds+' seconds '+'are exactly '+ hours+ ' hours '+minutes + ' minutes and '+finalseconds+' seconds');
