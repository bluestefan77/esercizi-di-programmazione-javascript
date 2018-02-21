/*
  La calcolatrice
  Scrivi un programma che prenda tre input:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Le operazioni supportate sono le suguenti:
    somma => +
    sottrazione => -
    moltiplicazione => *
    divisione => /
    modulo (solo tra interi) => %
    potenza => ^
    media => m
  Utilizza il costrutto Switch-Case mediante acquisizione di caratteri.
  http://www.imparareaprogrammare.it
*/

var a = 5;
var b = 3;
var op = 'potenza';
var result;

switch (op) {
  case 'somma':
  result=a+b;
  break;
  case 'sottrazione':
  result=a-b;
  break;
  case 'moltiplicazione':
  result=a*b;
  break;
  case 'divisione':
  result=a/b;
  break;
  case 'modulo':
  result=a%b;
  break;
  case 'potenza':
  result=(a)**b;
  break;
  case 'media':
  result=(a+b)/2;
  break;
}
