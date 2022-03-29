/* **************** ESERCIZIO 1 **************** */

/*Mail Chiedi all’utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.*/



// Creo l'array con alcune mail ranodom
const arrayEmail = new Array("nicolas@gmail.com", "gianni@gmail.com", "franco@gmail.com")
// Selezioniamo il button
const actionButton = document.querySelector(".btn_click");

actionButton.addEventListener('click', function () {
   
    
    
    //Inizio ciclo for per contare il contenuto dell'array
    for (let i = 0; i < arrayEmail.length; i++) {
        const emailUtente = document.getElementById("email").value;
        /* let risultato = document.querySelector(".result"); */
        //Inserisco l'elemento contato all'interno di una variabile
        const elementArray = arrayEmail[i];
        if (emailUtente === elementArray) {
            console.log(`L'email è presente nella lista`);
            //Verifico se l'elemento inserito dall'utente è DIVERSO a 
            //qualche elemento nella lista - Se è si?
            /* risultato.innerHTML = `La mail è presente nella lista` */
        } else {
            console.log(`L'email NON è presente nella lista`);
            //Verifico se l'elemento inserito dall'utente è DIVERSO a 
            //qualche elemento nella lista - Se è si?
            /* risultato.innerHTML = `La mail NON è presente nella lista` */
        }

        /* document.querySelector(".costo_ticket").innerHTML += prezzo_finito; */
    }
})




/* ************************************************** */


/* **************** ESERCIZIO 2 *****************/
/*Gioco dei dadi. Generare un numero random da 1 a 6, 
sia per il giocatore sia per il computer. Stabilire il vincitore, 
in base a chi fa il punteggio più alto. Prima di partire a scrivere 
codice poniamoci qualche domanda: 
Che ci sia un array da qualche parte? 
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/

//Dichiaro e inizializzo due variabili
let randomUtente = Math.floor(Math.random() * 6) + 1;
let randomBot = Math.floor(Math.random() * 6) + 1;

//Stampo le due variabili per verificare cosa contengono
console.log(randomUtente);
console.log(randomBot);

//Impongo una condizione
if (randomUtente > randomBot) {
    // Se random utente è maggiore di randomBot allora 
    // scrive quanto riportato in basso
    console.log("Utente hai vinto");
} else if (randomBot > randomUtente) {
    // Se viceversa, randomBot è maggiore di randomUtente allora 
    // scrive quanto riportato in basso
    console.log("Mi dispiace ha vinto il BOT");
} else {
    //Nei casi in cui sarà uguale allora la parita finirà in parità
    console.log("La parita è finita il parità");
}



/* **************** BONUS *************
Usiamo un input e un bottone per inserire 
la mail e poi mostriamo i risultati in pagina. 
*/
