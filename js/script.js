// Dichiaro la variabile per il parent del DOM
const gridContainer = document.getElementById('grid-container');
console.log(gridContainer);

// Dichiaro la variabile per il pulsante di Play
const playGame = document.querySelector("header button.btn");
console.log(playGame);

// Al click sul pulsante Play viene mostrata la griglia e resettata se è stata già caricata
playGame.addEventListener("click", function(){

// Dichiaro la variabile del select per il cambio il livello di difficoltà
const selectLevel = document.querySelector('.form-select');

// Dichiaro le variabili per la funzione di generazione di 16 numeri random
// In base al livello e al suo range utilizzo la funzione con argomenti differenti
let generateBombEasy = randomBombNumber(1, 100);
let generateBombMedium = randomBombNumber(1, 81);
let generateBombHard = randomBombNumber(1, 49)

    if (selectLevel.value == 1){
        document.getElementById("grid-container").innerHTML = "";

        console.log(generateBombEasy);

        gridContainer.classList.add("easy");
        gridContainer.classList.remove("medium", "hard");

        // Creo un ciclo FOR per il numero di quadrati da generare
        for (let i=0; i<100; i++){
            const newSquare = createNewSquare();

            newSquare.innerHTML = i + 1;

            newSquare.addEventListener("click", function(){
                newSquare.classList.add("clicked");
                if (generateBombEasy.includes(i + 1)){
                    newSquare.classList.remove("clicked");
                    newSquare.classList.add("bomb");
                    console.log("HAI PRESO UNA BOMBA!")
                }
                console.log("Hai cliccato il numero " + (i + 1));
            });

            gridContainer.append(newSquare)
        }

    }

    if (selectLevel.value == 2){
        document.getElementById("grid-container").innerHTML = "";

        console.log(generateBombMedium);

        gridContainer.classList.add("medium");
        gridContainer.classList.remove("easy", "hard");

        // Creo un ciclo FOR per il numero di quadrati da generare
        for (let i=0; i<81; i++){
        const newSquare = createNewSquare();
    
        newSquare.innerHTML = i + 1;
    
        newSquare.addEventListener("click", function(){
            newSquare.classList.toggle("clicked");
            if (generateBombMedium.includes(i + 1)){
                newSquare.classList.remove("clicked");
                newSquare.classList.add("bomb");
                console.log("HAI PRESO UNA BOMBA!")
            }
            console.log("Hai cliccato il numero " + (i + 1));
        });
    
        gridContainer.append(newSquare)
        }
    }

    if (selectLevel.value == 3){
        document.getElementById("grid-container").innerHTML = "";

        console.log(generateBombHard);

        gridContainer.classList.add("hard");
        gridContainer.classList.remove("medium", "easy");

        // Creo un ciclo FOR per il numero di quadrati da generare
        for (let i=0; i<49; i++){
        const newSquare = createNewSquare();
    
        newSquare.innerHTML = i + 1;
    
        newSquare.addEventListener("click", function(){
            newSquare.classList.toggle("clicked");
            if (generateBombHard.includes(i + 1)){
                newSquare.classList.remove("clicked");
                newSquare.classList.add("bomb");
                console.log("HAI PRESO UNA BOMBA!")
            }
            console.log("Hai cliccato il numero " + (i + 1));
        });
    
        gridContainer.append(newSquare)
        }
    }
})


// Creo una funzione per la creazione di un nuovo quadrato
function createNewSquare (){
    const currentSquare = document.createElement("div");
    currentSquare.classList.add("square");
    return currentSquare;
}


// Funzione di creazione di un numero random, che sarà la nostra bomba
    //Creo l'array blacklist che andrà riempito per non creare duplicati
    // Continua finché l'array blacklist non ha 16 elementi
    // Genero un numero random e se non presente nella lista lo ritorna
function randomBombNumber(min, max){
    let blackList = [];
    while ( blackList.length < 16 ){
        let randomNumber = Math.round(Math.random() * (max - min) + min);
        if ( blackList.includes(randomNumber) === false ){
        blackList.push(randomNumber);
        }
    }
    return blackList;
}