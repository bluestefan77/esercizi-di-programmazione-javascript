/*
  Fai il professore
  Scrivi un programma che converte un voto numerico in un giudizio seguendo questi parametri:
    v < 18:  insufficiente
    18 < = v <21:  sufficiente
    21 < = v <24:  buono
    24 < = v <27:  distinto
    27 < = v <29:  ottimo
    v = 30:  eccellente
  Utilizza costrutto If.

  Variante
  Realizzare una versione con il costrutto Switch-Case.
  http://www.imparareaprogrammare.it
*/
var v = 20;

switch (v) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  console.log('Il voto è insufficiente');
  break;
  case 18:
  case 19:
  case 20:
  case 21:
  console.log('Il voto è sufficiente');
  break;
  case 22:
  case 23:
  case 24:
  console.log('Il voto è buono');
  break;
  case 25:
  case 26:
  case 27:
  console.log('Il voto è distinto');
  case 28:
  case 29:
  console.log('Il voto è ottimo');
  case 30:
  console.log('Il voto è eccellente');
  }
