// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

const userWord = prompt('inserisci una parola');
console.log('Hai inserito la parola: ' + userWord);

// Dichiarazione variabile singolo carattere della parola
let char;

// Dichiarazione variabile parola inversa
let invertedWord = "";

function wordInverse (parola){
  let i = userWord.length - 1;

  while (i >= 0) {
    char = userWord[i];
    invertedWord += char;
    console.log(char);
    i--;
  }

  return invertedWord;
}

wordInverse(userWord);
console.log('La parola al contrario è: ' + invertedWord);

// Condizione per verificare se la parola è palindroma
if(userWord == invertedWord){
    console.log('La parola è palindroma!');
  } else {
    console.log('Mi dispiace, la parola non è palindroma');
  }