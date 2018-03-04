/*
  Il carcere di Gotham City
  Sei appena stato nominato direttore presso il carcere di Gotham City.
  Hai l'arduo compito di scrivere un programma che gestisca:
  - I dati anagrafici delle guardie
  - I dati anagrafici dei detenuti
  - I fascioli personali dei detenui, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale
      - La data di carcerazione
      - La data di scarcerazione
      - Il crimine commesso

  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire sia le guardie che i criminali.
  In ogni caso dovrai definire la banca dati della prigione: crea un array di guardie, una di detenuti e una per i fascicoli.

  Prevedi la possibilià di:
    - Assumere nuove guardie
    - Schedare nuovi carcerati
    - Aggiungere nuovi fascicoli
    - Visualizzare l'elenco per ciascuna categoria (guardie, criminali, fascicoli)
    - Effettuare ricerche nei fascicoli per nome del detenuto

  Nel carcere di Gothma City non tutti i detenuti arrivano alla data di scarcerazione, gestisci l’eventualità in cui un detenuto sia evaso e quella in cui sia deceduto.

  Scrivi una funzione di riepilogo dell'andamento del carcere e che stampi il numero delle guardie, il numero di detenuti totali, il numero di detenuti evasi
  e il numero di detenuti deceduti all’interno della struttura.

  http://www.imparareaprogrammare.it
*/

var fascicoli = [];
var guardie = [batman, superman];

var batman = {
  tipo: 'guardia',
  nome: 'batman',
  numero: '123456789',
  indirizzo: 'pipiroad'
}
var superman = {
  tipo: 'guardia',
  nome: 'superman',
  numero: '987654321',
  indirizzo: 'superroad'
}
console.log(guardie);

var detenuti = [bassotti, lupin];

var bassotti = {
  tipo: 'ladro',
  nome: 'bassot',
  crimine: 'furto',
  dataCarcerazione: '01/01/2010',
  dataScarcerazione: '02/03/2017'
}
var lupin = {
  tipo: 'ladro',
  nome: 'lupin',
  crimine: 'truffa',
  dataCarcerazione: '01/01/2012',
  dataScarcerazione: '02/03/2019'
}
console.log(detenuti);

function assumiGuardia (x) {
  x.push({
    tipo: 'guardia',
    nome: 'spiderman',
    numero: '987654321',
    indirizzo: 'spiderroad'
  })
}
assumiGuardia(guardie);
console.log(guardie);

function schedaCriminale (x) {
  x.push({
    tipo: 'ladro',
    nome: 'lupin2',
    crimine: 'truffa',
    dataCarcerazione: '01/01/2012',
    dataScarcerazione: '02/03/2019'
  })
}
assumiGuardia(guardie);
console.log(guardie);
