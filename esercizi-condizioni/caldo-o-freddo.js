/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/

var lunedì=5;
var martedì=4;
var mercoledì=-1;
var giovedì=0;
var venerdì=5;
var sabato=7;
var domenica=8;

var max=Math.max(lunedì,martedì,mercoledì,giovedì,venerdì,sabato,domenica);
var min=Math.min(lunedì,martedì,mercoledì,giovedì,venerdì,sabato,domenica);

var hotday='lunedì';
var coldday='lunedì';

switch(max) {
case max=lunedì:
hotday='lunedì';
break;
case max=martedì:
hotday='martedì';
break;
case max=mercoledì:
hotday='mercoledì';
break;
case max=giovedì:
hotday='giovedì';
break;
case max=venerdì:
hotday='venerdì';
break;
case max=sabato:
hotday='sabato';
break;
case max=domenica:
hotday='domenica';
break;
}

switch(min) {
case min=lunedì:
coldday='lunedì';
break;
case min=martedì:
coldday='martedì';
break;
case min=mercoledì:
coldday='mercoledì';
break;
case min=giovedì:
coldday='giovedì';
break;
case min=venerdì:
coldday='venerdì';
break;
case min=sabato:
coldday='sabato';
break;
case min=domenica:
coldday='domenica';
break;
}

console.log('La giornata più calda è ' + hotday);
console.log('La giornata più fredda è ' + coldday);
