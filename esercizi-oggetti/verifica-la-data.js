/*
  Verifica la data
  Scrivi un programma che definisca un oggetto per la rappresentazione di una data, l'oggetto sarà composto da giorno, mese e anno (input a piacere).
  Adesso, scrivi una funzione che prenda in input la data e verifichi se è valida o meno, in questo modo:
    Input:
      day: 18
      month: 19
      year: 2016
    Output:
      "La data non è valida!"

  http://www.imparareaprogrammare.it
*/

var data = {
  giorno:31,
  mese:5,
  anno:2016
}

  if ((data.mese > 12) || (data.giorno > 31) || (data.mese ==2 && data.giorno >28) || ((data.mese == 4 || data.mese == 6 || data.mese == 9) && data.giorno > 30)) {
    console.log('La data non è valida');
  } else {
  console.log(data);
}
