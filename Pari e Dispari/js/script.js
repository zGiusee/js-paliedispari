// FUNZIONI

// CREO LA FUNZIONE CHE GENERI NUMERI CASUALI DA 1 A 5
function rng(){
    return Math.floor(Math.random() * 5 + 1);
}

function result(scelta){
    // CREO LE CONDIZIONI PER LA VITTORIA BASANDOMI SULLA SOMMA E SULLA SCELTA DELL'UTENTE
    if(scelta == "pari" || scelta == "Pari" || scelta == "PARI"){
        
        if(somma %2 == 0){
            console.log('Complimenti, hai vinto!')
        }
        else{
            console.log('Mi dispiace, ha vinto il computer!')
        }
    }
    else if(scelta == "dispari" || scelta == "Dispari" || scelta == "DISPARI"){

        console.log("numero dispari");

        if(somma %2 == 0){
            console.log('Mi dispiace, ha vinto il computer!')
        }
        else{
            console.log('Complimenti, hai vinto!')
        }
    }
    else{
        console.log("Hai inserito un valore non valido.")
    }

}

// PARI E DISPARI

// CHIEDO ALL'UNTENTE DI SCEGLIERE TRA PARI E DISPARI
let scelta = prompt("Segli se puntare sul Pari o sul Dispari scrivendolo qua sotto.");

// CHIEDO ALL'UTENTE DI SCEGLIERE UN NUMERO DA 1 A 5
let myNum = parseInt(prompt("Inserisci un numero da 1 a 5"));

// FACCIO 2 CONDIZIONI NEL METODO DI INSERIMENTO DEL NUMERO

// 1' CONDIZIONE = IL CONTENUTO DEVE ESSERE UN NUMERO E NON UNA PAROLA
while(isNaN(myNum) == true){
    myNum = parseInt(prompt("Non hai inserito un numero valido. Inserisci un numero da 1 a 5"));

    if(isNaN(myNum) == false){
        
    }
} // 2' CONDIZIONE = IL NUMERO NON DEVE ESSERE MAGGIORE DI 5
while(myNum > 5){
    myNum = parseInt(prompt("Hai inserito un numero tropppo alto! Inserisci un numero da 1 a 5"));

    if(myNum <= 5){
        
    }
}


// VERIFICO CHE SIA STATO ESEGUITO TUTTO CORRETTAMENTE
console.log(myNum)

// DICHIARO LA VARIABILE PER IL NUMERO RANDOMICO DEL COMPUTER
let computerNum = rng();

// VERIFICO CHE SIA STATO ESEGUITO TUTTO CORRETTAMENTE
console.log(computerNum);

// ESEGUO LA SOMMA TRA IL NUMERO DELL'UTENTE E QUELLO GENERATO DALL COMPUTER
let somma = myNum + computerNum;

// VERIFICO CHE LA SOMMA SIA STATA ESEGUITA CORRETTAMENTE
console.log(somma);

// DICHIARO LA FUNZIONE DEL RISULTATO FINALE
result(scelta);



