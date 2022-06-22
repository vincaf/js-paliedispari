// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function sum(num1, num2){
    let sum = 0;
    sum = num1 + num2;
}

function isNotUneven(numero)
{
    let risultato = num % 2;
    if (risultato == 0){
    return false;
    } else if (risultato == 1){
    return true;
    } else {
    alert("Non è un numero intero");
    return "";
    }
}

const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('Hai scelto il numero: ' + userNumber);
    if(userNumber > 5){
        alert("Il numero è maggiore di 5, ricarica!")
    }

const computerNumber = Math.round(Math.random() * 5);
console.log('Il computer ha scelto il numero: ' + computerNumber);
