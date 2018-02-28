/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti, il Giorno e il Mese. La funzione deve restituire il numero del giorno compreso tra 1 e 366.
    Input : 5, 2
    Output:
            36

  Hint: puoi definire un array con i giorni di ogni mese e ciclarlo.
  http://www.imparareaprogrammare.it
*/

var giorno = 5;
var mese = 5;
var giorniTrascorsi =0;

var anno = [[1,31],[2,28],[3,31],[4,30],[5,31],[6,30],[7,31],[8,31],[9,30],[10,31],[11,30],[12,31]];

function contaGiorni (x,y){
  for (var i = 0; i < mese-1; i++) {
    giorniTrascorsi = giorniTrascorsi + anno[i][1];
  }
return giorniTrascorsi+giorno;
}

console.log(contaGiorni(giorno,mese));
