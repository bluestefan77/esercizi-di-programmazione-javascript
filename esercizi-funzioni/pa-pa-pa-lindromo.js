/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.
    Input : i topi non avevano nipoti
    Output:
            TRUE
  Hint: puoi eliminare spazi e segni di punteggiatura usando le espressioni regolarie e il metodo del tipo stringa chiamato replace, in questo modo: str.replace(/\W/g, "")
  http://www.imparareaprogrammare.it
*/

var parola ='ai lati d\'italia';
var parolaPulita = parola.replace(/\W/g, "");
console.log(parolaPulita);

function palindroma(x) {
  return [parolaPulita.split("").reverse().join("") == parolaPulita, parolaPulita.split("").reverse().join("")];
  //converto in array, inverto e riconverto in stringa, poi in output produco un array dove vedo andhe il risultato dell'inversione
}

console.log(palindroma(parola));
