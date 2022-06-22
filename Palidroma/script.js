// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

const userWord = prompt('inserisci una parola');
console.log('Hai inserito la parola: ' + userWord);

// Dichiarazione variabile singolo carattere della parola
let char;

// Dichiarazione variabile parola inversa
let invertedWord = "";

// Inizializzazione variabile index per ciclo while sulla parola inserita
let i = userWord.length - 1;

// Ciclo while per spezzare la parola e ricostruirla invertita
while (i >= 0) {
  char = userWord[i];
  invertedWord += char;
  console.log(char);
  i--;
}

console.log(invertedWord);