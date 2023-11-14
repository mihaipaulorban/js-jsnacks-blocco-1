// 'use strict'

// let numeriArray = [];

// // Chiedo all'utente di inserire numeri fino a quando la somma è inferiore a 50
// while (calcolaSomma(numeriArray) < 50) {

//   let numero = parseInt(prompt("Inserisci un numero:"));

//   // Aggiungo il numero all'array
//   numeriArray.push(numero);
  
//   // Verifico se la somma è superiore a 50
//   if (calcolaSomma(numeriArray) >= 50) {
//     alert("La somma dei numeri ha superato i 50!");
//   }
// }

// // Console log
// console.log("Array finale:", numeriArray);

// // Funzione per calcolare la somma
// function calcolaSomma(array) {
//   return array.reduce((acc, num) => acc + num, 0);
// }



let numeriArray = [];

// Chiedo all'utente di inserire numeri fino a quando la somma è inferiore a 50
for (let i = 0; calcolaSomma(numeriArray) < 50; i++) {

  let numero = parseInt(prompt("Inserisci un numero:"));

  // Aggiungo il numero all'array
  numeriArray.push(numero);

  if (calcolaSomma(numeriArray) >= 50) {
    allert("La sommadei numeri ha superato i 50!")
  }
}

console.log("Array finale:", numeriArray);

// Funzione per calcolare la somma
function calcolaSomma(array) {
  return array.reduce((acc, num) => acc + num, 0);
}
