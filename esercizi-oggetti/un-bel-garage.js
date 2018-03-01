/*
  Un bel garage
  Scrivi un programma per la gestione di un garage:
  - Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  - Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

  Hint: puoi usare un array come base per salvare le automobili.

  http://www.imparareaprogrammare.it
*/

var autoDellaStessaMarca = [];

var garage = [
    {marca: 'Audi', modello: 'A4' },
    {marca: 'Audi', modello: 'A2' },
    {marca: 'Fiat', modello: 'Bravo'},
    {marca: 'Audi', modello: 'A3' }
];

for (var i=0; i < garage.length; i++) {
    if (garage[i].marca == 'Audi') {
      autoDellaStessaMarca[i] = garage[i].modello;
  }
}

console.log(autoDellaStessaMarca.filter(function(e){return e}));
