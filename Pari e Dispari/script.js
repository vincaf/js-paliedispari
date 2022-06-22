// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function sumNumbers(num1, num2){
    let sum = 0;
    sum = num1 + num2;
    return sum;
}

function isNotUneven(numero)
{
    let risultato = numero % 2;
    if (risultato == 0){
    return false;
    } else if (risultato == 1){
    return true;
    } else {
    alert("Non è un numero intero");
    return "";
    }
}

let userChoice = prompt('Scegli pari o dispari')
    while((userChoice != 'pari') && (userChoice != 'dispari')){
        userChoice = prompt('Scegli pari o dispari');
    }

let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
    while( (userNumber > 5)||(userNumber < 1) ){
        userNumber = parseInt(prompt('ATTENZIONE! Inserisci un numero da 1 a 5'));
    }
console.log('Hai scelto il numero: ' + userNumber);

const computerNumber = Math.round(Math.random() * 5);
console.log('Il computer ha scelto il numero: ' + computerNumber);

let resultNumber = sumNumbers(userNumber, computerNumber);
console.log('La somma dei due numeri è: ' + resultNumber);

let resultGame = isNotUneven(resultNumber);
if(resultGame == false){
    if(userChoice == 'pari'){
        console.log('Vince il pari - Hai vinto');
    } else {
        console.log('Vince il pari - Hai perso');
    }
} else if (resultGame == true){
    if(userChoice == 'dispari'){
        console.log('Vince il dispari - Hai vinto');
    } else {
        console.log('Vince il dispari - Hai perso');
    }
}
