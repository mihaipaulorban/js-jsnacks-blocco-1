
//Faccio scrivere le parole dall'utente

const parola1 = prompt("Inserisci una parola che ti piace:");
const parola2 = prompt("Inserisci un'altra parola che ti piace:");


//Determino la parola più corta o più lunga e poi la stampo in console
if (parola1.length < parola2.length) {
  console.log("La parola più corta è: " + parola1);
  console.log("La parola più lunga è: " + parola2);
} else if (parola2.length < parola1.length) {
  console.log("La parola più corta è: " + parola2);
  console.log("La parola più lunga è: " + parola1);

  //Stampo un messaggio alternativo se la lunghezza è la stessa
} else {
  console.log("Le due parole hanno la stessa lunghezza.");
}