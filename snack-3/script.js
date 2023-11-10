// Inizializza la variabile somma
let somma = 0;

// Variabile per memorizzare i numeri inseriti dall'utente
const numeriInseriti = [];

// Uso un ciclo che viene eseguito 10 volte dove la variabile i tiene traccia dei prompt
for (let i = 0; i < 10; i++) {
  const input = prompt("Inserisci un numero:");
  const numero = parseFloat(input);

  // Controllo se l'utente inserisce un valore numerico
  if (!isNaN(numero)) {
    // Salva i numeri che l'utente inserisce
    numeriInseriti.push(numero);
    
    // Il programma aggiunge il numero alla somma
    somma += numero;
  } else {
    // Se il valore invece non è numerico il programma manda un alert
    alert("Hai inserito un valore non valido. Inserisci un numero.");

    // Riduce il contatore in modo che l'utente riprovi.
    i--;
  }
}

// Stampa in console la somma e i numeri
console.log("Numeri inseriti:", numeriInseriti);
console.log("La somma di tutti i numeri inseriti è:", somma);
