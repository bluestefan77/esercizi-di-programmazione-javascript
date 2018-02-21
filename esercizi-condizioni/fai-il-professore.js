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
var v = 23;

if (v < 18) {
  console.log('Il voto è insufficiente');
} else if (v >= 18 && v <21) {
  console.log('Il voto è sufficiente');
} else if (v >= 21 && v < 24) {
  console.log('Il voto è buono');
} else if (v >= 24 && v < 27) {
  console.log('Il voto è distinto');
} else if (v >= 27 && v < 29) {
  console.log('Il voto è ottimo');
} else {
  console.log('Il voto è eccellente');
}
