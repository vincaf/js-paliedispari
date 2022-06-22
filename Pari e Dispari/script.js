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
