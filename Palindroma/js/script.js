// FUNZIONI

// CREO LA FUNZIONE CHE VERIFICHI SE LA PAROLA è PALINDROMA O NO
function paliGuesser(normal, reversed){
    
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

// DIVIDO LE PAROLE IN LETTER PER CONFRONTARLE TRA DI LORO
let normal = word.split('').join().toLowerCase();
let reversed = word.split('').reverse().join().toLowerCase();

// CONTROLLO CHE LE DUE VERSIONI DELLA PAROLA SIANO STATE DIVISE CORRETTAMENTE
console.log(reversed, normal);

// RICHIAMO LA FUNZIONE DI VERIFICA
paliGuesser(normal, reversed);






