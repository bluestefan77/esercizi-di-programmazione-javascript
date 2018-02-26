/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  http://www.imparareaprogrammare.it
*/

var array1 = [];
var array2 = [];

for (var i = 0; i < 10; i++) {
  for (var j = 0 ; j < 10; j++) {
  array2[j] = Math.round(Math.random()*10);
}
array1[i] = array2;
}
console.log('La matrice è: ' + array1);
