/* 

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

/* Chiedo i dati agli utenti, li trasformo in numeri e li inserisco nelle variabili corrispondenti */

const chilometri = parseInt(prompt("Quanti km vuoi percorrere?"));
const anni = parseInt(prompt("Quanti anni hai?"));

/* Calcolo del prezzo del biglietto */

let prezzoPieno = 0.21 * chilometri;

/* Calcolo del nuovo prezzo scontato in base all'età dell'utente e lo mostro nell'html */

if (anni < 18) {
    /*  under 18 */
    let prezzoScontato = (prezzoPieno / 100) * 80;
    document.getElementById("prezzoVisualizzato").innerHTML = prezzoScontato + "€";
} else if (anni > 65) {
    /* over 65 */
    let prezzoScontato = (prezzoPieno / 100) * 60;
    document.getElementById("prezzoVisualizzato").innerHTML = prezzoScontato + "€";
} else {
    /* 18-65 */
    document.getElementById("prezzoVisualizzato").innerHTML = prezzoPieno + "€";
}
