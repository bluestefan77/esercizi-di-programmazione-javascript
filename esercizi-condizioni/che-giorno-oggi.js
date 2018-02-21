/*
  Che giorno è oggi?
  Scrivi un programma che accetti in ingresso un numero intero compreso tra 1 a 7 e visualizzi il corrispondente giorno della settimana, esempio:
    1 => lunedì
    2 => martedì
    3 => mercoledì
    ...
    6 => domenica
  Utilizza il costrutto Switch-case, prevedi anche il caso in cui il valore immesso non sia valido, e stampare un messaggio di errore a tua scelta.

  Variante
  Scriverne una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.
  http://www.imparareaprogrammare.it
*/
var dayOfTheWeek = 5;

switch (dayOfTheWeek) {
  case 1:
  dayOfTheWeek='lunedì';
  break;
  case 2:
  dayOfTheWeek='martedì';
  break;
  case 3:
  dayOfTheWeek='mercoledì';
  break;
  case 4:
  dayOfTheWeek='giovedì';
  break;
  case 5:
  dayOfTheWeek='venerdì';
  break;
  case 6:
  dayOfTheWeek='sabato';
  break;
  case 7:
  dayOfTheWeek='domenica';
  break
  default:
  dayOfTheWeek='NaD';
}

if (dayOfTheWeek != 'NaD') {
  console.log('Hai selezionato il ' + dayOfTheWeek);
} else {
  console.log('Il numero immesso non è un giorno della settimana');
}
