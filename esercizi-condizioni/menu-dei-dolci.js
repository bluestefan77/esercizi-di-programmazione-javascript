/*
  Menu dei dolci
  Scrivi un programma stampi il seguente menu:
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia
  Inoltre, prenda in input il valore numerico della scelta.
  Se la scelta non è tra quelle elencate verrà stampata la scritta 'Dolce non disponibile' altrimenti verrà visualizzata la scelta effettuata 'Hai scelto il dolce X'.
  http://www.imparareaprogrammare.it
*/
/*
Per prima cosa stampo il menù con un comando console.log utilizzando il "vai a capo" \n
poi prendo in input un numero n che definisco come variabile e lo inizializzo
controllo a quale piatto corrisponde il numero n che ho scelto e con un ciclo switch-case produco un output
*/
console.log('MENU: \n1. Tiramisù\n2. Torta della nonna\n3. Cheesecake alla nutella\n4. Macedonia');

var n = 3;
switch(n) {
  case 1:
  console.log('Hai scelto il tiramisù')
  break;
  case 2:
  console.log('Hai scelto la torta della nonna')
  break;
  case 3:
  console.log('Hai scelto la cheescake')
  break;
  case 4:
  console.log('Hai scelto la macedonia')
  break;
  default:
  console.log('Dolce non disponibile')
}
