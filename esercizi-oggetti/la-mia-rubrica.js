/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.
  - Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
    L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.
  - Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
    Implementa i metodi dell'oggetto per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti
      - Inserimento di un nuovo contatto
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.

  Variante
  Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome e ricava l'indice sul quale applicare l'operazione.
  Gestore quindi un array di oggetti prevedendo la possibileà di: inserire, modificare, visualizzare, ricercare e cancellare contatti della rubrica.
  http://www.imparareaprogrammare.it
*/

var rubrica = [contatto1, contatto2];

var contatto1 = {
  nome: 'Stefano',
  numero: '123456789',
  indirizzo: 'Lofoten straße'
}
var contatto2 = {
  nome: 'Ivana',
  numero: '987654321',
  indirizzo: 'Lofoten straße'
}

function visualizzaLista (x) {
for (var i = 0; i < x.length; i++) {
  console.log(x[i].nome);
}
}
visualizzaLista(rubrica);

function inserisciContatto (x) {
  x.push({
    nome: 'Pippo',
    numero: '123457777',
    indirizzo: 'Plutonia'
  })
}
inserisciContatto(rubrica);
console.log(rubrica);

function visualizzaContatto (x) {
  console.log((rubrica[x]));
}
visualizzaContatto(1);

function eliminaContatto (x) {
  rubrica.splice(x,1);
}
eliminaContatto(1);
console.log(rubrica);

function cercaNome (x) {
  for (var i = 0; i < rubrica.length; i++) {
  if (rubrica[i].nome == x) {
    console.log(rubrica[i]);
  }
}
}
cercaNome('Stefano');
