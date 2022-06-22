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

// Ciclo while per riscrivere lettera per lettera la parola al contrario
while (i >= 0) {
  char = userWord[i];
  invertedWord += char;
  console.log(char);
  i--;
}

console.log('La parola invertita è: ' + invertedWord);

// Condizione per verificare se la parola è palindroma
if(userWord == invertedWord){
    console.log('La parola è palindroma!');
  } else {
    console.log('Mi dispiace, la parola non è palindroma');
  }