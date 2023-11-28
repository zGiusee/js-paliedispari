// FUNZIONI
function reverse(word){
    
    for(let i=0; i<word.length; i++){
        console.log(word[i])
    }    

    let reverse = word.split('').reverse().join('').toLowerCase();
        console.log(reverse)

    
}

function paliGuesser(word){

    for(let i=0; i<word.length; i++){
        console.log(word[i])
    }    

    let normal = 
}

// PALINDROMA

// Chiedo all'utente di inserire la parola

let word = prompt("Inserisci la parola che credi possa essere palindroma.")

let normal = paliGuesser(word);
let reverseWord = reverse(word);

if(normal === reverseWord){
    console.log("PALINDROMA")
}
else{
    console.log("NON PALIDNROMA")
}







