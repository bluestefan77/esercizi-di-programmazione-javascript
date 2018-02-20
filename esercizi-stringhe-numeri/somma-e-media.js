/*
  Somma e media
  Scrivi un programma che prenda in input 5 numeri a tua scelta e restituisca in output la somma e la media.
  http://www.imparareaprogrammare.it
*/
/*
firstNum=4;
secondNum=8;
thirdNum=5;
fourthNum=11;
fifthNum=2;
numero di numeri = firstNum/firstNum+secondNum/secondNum +...

Sum = somma dei 5 numeri
Media = somma dei 5 numeri/numero di numeri
*/
var firstNum=4;
var secondNum=8;
var thirdNum=5;
var fourthNum=11;
var fifthNum=2;
var numberOfNum=firstNum/firstNum+secondNum/secondNum+thirdNum/thirdNum+fourthNum/fourthNum+fifthNum/fifthNum;

var sum=firstNum+secondNum+thirdNum+fourthNum+fifthNum;
var med=sum/numberOfNum;

console.log('La somma è ' + sum + ". La media è " + med + ".");
