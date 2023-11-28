// FUNZIONI
function paliGuesser(normal, reversed){
    
    if(normal === reversed){
        console.log("La parola che hai inserito è palindroma!")
    }
    else{
        console.log("La parola che hai inserito NON è palindroma!")
    }

    return;

}

// PALINDROMA

// Chiedo all'utente di inserire la parola

let word = prompt("Inserisci la parola che credi possa essere palindroma.")


let normal = word.split('').join();
let reversed = word.split('').reverse().join();

console.log(reversed, normal)

paliGuesser(normal, reversed);






