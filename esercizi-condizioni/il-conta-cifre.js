/*
  Il conta cifre
  Scrivi un programma che calcoli quante cifre sono contenute in un numero inserito in input (massimo 9999).
  http://www.imparareaprogrammare.it
*/
/*
definisco il mio numero come variabile e lo inizializzo
lo divido per 10 e se il suo arrotondamento inferiore è 0 allora il risultato è 1
altrimenti lo divido per 100 e se il suo arrotondamento inferiore è 0 allora il risultato è 2
altrimenti lo divido per 1000 e se il suo arrotondamento inferiore è 0 allora il risultato è 3
altrimenti il risultato è 4
*/

var n=745;
if (n/10<1)
  console.log('Il numero ' + n + ' ha una cifra.');
 else if (n/100<1)
  console.log('Il numero ' + n + ' ha due cifre.');
 else if (n/1000<1)
  console.log('Il numero ' + n + ' ha tre cifre.');
 else
    console.log('Il numero ' + n + ' ha quattro o più cifre.');
