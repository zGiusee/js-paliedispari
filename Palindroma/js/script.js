// FUNZIONI

// CREO LA FUNZIONE CHE VERIFICHI SE LA PAROLA è PALINDROMA O NO
function paliGuesser(normal){
    
    // DICHIARO LA VARIABILE CHE INVERTA LA PAROLA INSERITA DALL'UTENTE
    let reversed = word.split('').reverse().join().toLowerCase();

    // CONTROLLO CHE LA PAROLA SIA STATA INVERTITA CORRETTAMENTE
    console.log(reversed);

    // ESEGUO LA VERIFICA DELLE DUE PAROLE PER CAPIRE SE SONO UGUALI
    if(normal === reversed){
        console.log("La parola che hai inserito è palindroma!");
    }
    else{
        console.log("La parola che hai inserito NON è palindroma!");
    }

}

// PALINDROMA

// CHIEDO ALL'UTENTE DI INSERIRE LA PAROLA
let word = prompt("Inserisci la parola che credi possa essere palindroma.");

// DIVIDO LA PAROLA IN LETTERE PER CONFRONTARLA CON LA SUA VERSIONE INVERTITA
let normal = word.split('').join().toLowerCase();

// STAMPO LA PAROLA INSERITA DALL'UTENTE PER CONFRONTARLA CON QUELLA INVERTITA
console.log(normal);

// RICHIAMO LA FUNZIONE DI VERIFICA
paliGuesser(normal);






