/*Mail Chiedi all’utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.*/



// Creo l'array con alcune mail ranodom
const arrayEmail = new Array("nicolas@gmail.com", "gianni@gmail.com", "franco@gmail.com")
// Chiedo all'utente di inserire la propria mail
const emailUtente = prompt("Inserisci qui la tua mail")


//Inizio ciclo for per contare il contenuto dell'array
for (let i = 0; i < arrayEmail.length; i++) {
    //Inserisco l'elemento contato all'interno di una variabile
    const elementArray = arrayEmail[i];
    if (emailUtente == elementArray ) {
        //Verifico se l'elemento inserito dall'utente è uguale a 
        //qualche elemento nella lista - Se è si?    
        console.log(" Presente all'interno della lista");
    } else if (emailUtente !== elementArray ) {
        //Verifico se l'elemento inserito dall'utente è uguale a 
        //qualche elemento nella lista - Se è si? 
        console.log(" NON PRESENTE all'interno della lista");
    } else {
    
        console.log("Nessuna conincidenza con gli elementi inseriti");
    }
}