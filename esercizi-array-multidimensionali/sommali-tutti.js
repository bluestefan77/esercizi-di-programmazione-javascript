/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Input :
      2 3
    Output:
      [
        [1, 50, 100],
        [1, 20, 40],
      ]
      212

  http://www.imparareaprogrammare.it
*/
var N = 3;
var M = 4;
var matrice = [];
var array = [];
var somma = 0;

for (var i = 0; i < N; i++) {
array=[];
    for (var j = 0; j < M; j++) {
      array[j] = Math.ceil(Math.random()*100);
    }
  matrice[i]=array;
  }
console.log(matrice);

for (var i = 0; i < N; i++) {
    for (var j = 0; j < M; j++) {
    somma += matrice[i][j];
    }
  }
console.log(somma);
