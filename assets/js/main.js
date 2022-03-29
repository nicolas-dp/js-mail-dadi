/* **************** ESERCIZIO 1 **************** */

/*Mail Chiedi all’utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.*/



// Creo l'array con alcune mail ranodom
const arrayEmail = new Array("nicolas@gmail.com", "gianni@gmail.com", "franco@gmail.com")
// Selezioniamo il button
const actionButton = document.querySelector(".btn_click");

actionButton.addEventListener('click', function () {
    let risultato = document.querySelector(".result");
    let trovata = false;
    const emailUtente = document.getElementById("email").value;
    //Inizio ciclo for per contare il contenuto dell'array
    for (let i = 0; i < arrayEmail.length; i++) {
        
        //Inserisco l'elemento contato all'interno di una variabile
        const elementArray = arrayEmail[i];
        if (emailUtente == elementArray) {
            trovata = true;
        }
    }

    if (trovata == true) {
        risultato.innerHTML = `La mail è presente nella lista` 
    } else {
        risultato.innerHTML = `La mail NON è presente nella lista` 
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
let elementContainerDadi = document.querySelector(".dadi");
let elementNumberUser = document.querySelector(".numero_utente>div");
let elementNumberBot = document.querySelector(".numero_bot>div");
let risultatoText = document.querySelector(".risultato");
let buttonGioco = document.querySelector(".btn_gioco");
//Stampo le due variabili per verificare cosa contengono
/* console.log(randomUtente);
console.log(randomBot); */

//Impongo una condizione

buttonGioco.addEventListener("click", function () {
    elementContainerDadi.classList.remove("dadi");
    if (randomUtente > randomBot) {
        
        // Se random utente è maggiore di randomBot allora 
        // scrive quanto riportato in basso
        elementNumberUser.innerHTML = randomUtente;
        elementNumberBot.innerHTML = randomBot;
        risultatoText.style = "color: green";
        risultatoText.innerHTML = "Hai vinto";
    } else if (randomBot > randomUtente) {
        
        // Se viceversa, randomBot è maggiore di randomUtente allora 
        // scrive quanto riportato in basso
        elementNumberUser.innerHTML = randomUtente;
        elementNumberBot.innerHTML = randomBot;
        risultatoText.style = "color: red";
        risultatoText.innerHTML = "Mi dispiace ha vinto il BOT";
    } else {
        //Nei casi in cui sarà uguale allora la parita finirà in parità

        elementNumberUser.innerHTML = randomUtente;
        elementNumberBot.innerHTML = randomBot;
        risultatoText.style = "color: blue";
        risultatoText.innerHTML = "La parita è finita il parità";
    }
    
})





/* **************** BONUS *************
Usiamo un input e un bottone per inserire 
la mail e poi mostriamo i risultati in pagina. 
*/
