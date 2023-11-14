// Chiedo all'utente di inserire un numero
var N = prompt("Inserisci un numero:");

// Converto l'input in un numero intero
N = parseInt(N);

// Verifico se l'input è un numero valido
if (isNaN(N) || N <= 0) {
    alert("Inserisci un valore numerico");
} else {

    // Genero N array con 10 numeri casuali ciascuno
    for (var i = 0; i < N; i++) {
        var randomArray = [];
        for (var j = 0; j < 10; j++) {
            var randomNumber = Math.floor(Math.random() * 100) + 1;
            randomArray.push(randomNumber);
        }

        alert("Numeri Casuali Gruppo " + (i + 1) + ": " + randomArray.join(", "));
    }
}
