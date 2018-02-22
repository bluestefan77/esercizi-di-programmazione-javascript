/*
  Il calendario mediocre
  Scrivi un programma che stampi il calendario di un mese, ricevi in input:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)

  Variante
  Piuttosto che passarein input i giorni del mese passa direttamente il mese e calcola tu i giorni corrispondenti.
  http://www.imparareaprogrammare.it
*/

var mese='Gennaio';
var numeroDelGiorno = 0;
var giorni;
var giornoDellaSettimana;

switch(mese) {
case 'Gennaio':
case 'Marzo':
case 'Maggio':
case 'Luglio':
case 'Agosto':
case 'Ottobre':
case 'Dicembre':
giorni = 31;
break;
case 'Febbraio':
giorni = 28;
break;
case 'Aprile':
case 'Giugno':
case 'Settembre':
giorni =30;
}

for (var i=1; i<=giorni; i++) {

  switch(numeroDelGiorno) {
    case 0:
    giornoDellaSettimana='Lun';
    break;
    case 1:
    giornoDellaSettimana='Mar';
    break;
    case 2:
    giornoDellaSettimana='Mer';
    break;
    case 3:
    giornoDellaSettimana='Gio';
    break;
    case 4:
    giornoDellaSettimana='Ven';
    break;
    case 5:
    giornoDellaSettimana='Sab';
    break;
    case 6:
    giornoDellaSettimana='Dom';
    break;
    }

    console.log(giornoDellaSettimana,i);

      if (numeroDelGiorno < 6) {
      numeroDelGiorno++;
    } else {
      numeroDelGiorno = 0;
    }

  }
