/*
  Maggiore e minore
  Scrivi un programma che prenda quattro numeri in input, stampi in output il maggiore e il minore.
  http://www.imparareaprogrammare.it
*/
/*
prendo in ingresso i 4 numeri
var num1=3;
var num2=18;
var num3=-1;
var num4=100;
var maggiore
var minore

se num1>num2 allora maggiore=num1 altrimenti maggiore=num2
se num3>maggiore allora maggiore=num3 altrimenti maggiore=Maggiore
se num4>maggiore allora maggiore=num4 altrimenti maggiore=Maggiore
stampa maggiore

se num1<num2 allora minore=num1 altrimenti minore=num2
se num3<maggiore allora minore=num3 altrimenti minore=Maggiore
se num4<maggiore allora minore=num4 altrimenti minore=Maggiore
stampa minore
*/
var num1=3;
var num2=18;
var num3=-1;
var num4=100;
var maggiore
var minore

if (num1>num2) {
  maggiore = num1;
} else {
  maggiore = num2;
}
if (num3>maggiore) {
  maggiore = num3;
} else {
  maggiore = maggiore;
}
if (num4>maggiore) {
  maggiore = num4;
} else {
  maggiore = maggiore;
}
console.log('Il numero più alto è ' + maggiore)

if (num1<num2) {
  minore = num1;
} else {
  minore = num2;
}
if (num3<minore) {
  minore = num3;
} else {
  minore = minore;
}
if (num4<minore) {
  minore = num4;
} else {
  minore = minore;
}
console.log('Il numero più basso è ' + minore)
