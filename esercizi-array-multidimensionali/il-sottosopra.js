/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta, in questo modo:
    Input :
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/

var array1 = [[1,5],[2,3],[4,2]];
lung = array1.length;
lung2 = array1[0].length;
var array2 =[];

for (var j = 0; j < lung2; j++) {
for (var i = 0; i < lung; i++) {
  array2[i] = array1[i].shift();
}
console.log(array2)
}
