/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e le due array.

    Input :
      2 3
    Output:
      [
        [1, 50, 100],
        [1, 20, 40],
      ]

      Array R
        [151, 61]
      Array C
        [2, 70, 140]

  http://www.imparareaprogrammare.it
*/

var N = 3;
var M = 4;
var matrice = [];
var array = [];
var arrayR = [];
var arrayC = [];

for (var i = 0; i < N; i++) {
array = [];
    for (var j = 0; j < M; j++) {
      array[j] = Math.ceil(Math.random()*100);
    }
  matrice[i]=array;
  }
console.log(matrice);

for (var i = 0; i < N; i++) {
  arrayR[i] = 0;
  for (var j = 0; j < M; j++) {
  arrayR[i] += matrice[i][j];
}
}
console.log('La somma delle righe è: ' + arrayR);

for (var i = 0; i < M; i++) {
  arrayC[i] = 0;
  for (var j = 0; j < N; j++) {
  arrayC[i] += matrice[j][i];
}
}
console.log('La somma delle colonne è: ' + arrayC);
