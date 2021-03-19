// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 
// il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni
//  va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).



// dichiarazione variabili
var chilometri = prompt('quanti chilomerti vuoi percorrere?');
var eta = prompt('digita la tua etá');
var costoKm = 0.21;

// conversione dati utente
var chilometriNum = parseInt(chilometri)
var etaNum = parseInt(eta)
var prezzoBiglietto = (chilometriNum * costoKm );

// Validazione dati utente
if ( isNaN ( chilometriNum && etaNum)){
    alert('errore, puoi inserire solo numeri')
}

// applicazione sconto se possibile
if ( etaNum < 18 ){
    // applicazione sconto minorenni
    var prezzoFinale = prezzoBiglietto - (prezzoBiglietto * 0.2 )
}else if( etaNum > 65 ){ 
    // applicazione sconto anziani
    var prezzoFinale = prezzoBiglietto - (prezzoBiglietto * 0.4 )
}else{
    // nessuno sconto
    var prezzoFinale = prezzoBiglietto
}

// per indicare i centesimi sul prezzo e limitare i decimali a 2
prezzoFinale = prezzoFinale.toFixed(2);

// popup con il prezzo finale del biglietto
alert('il prezzo del tuo biglietto é: \n' + prezzoFinale + '$')