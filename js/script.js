// Dichiaro la variabile per il parent del DOM
const gridContainer = document.getElementById('grid-container');
console.log(gridContainer);

// Dichiaro la variabile per il pulsante di Play
const playGame = document.querySelector("header button.btn");
console.log(playGame);

// Al click sul pulsante Play viene mostrata la griglia e resettata se è stata già caricata
playGame.addEventListener("click", function(){

    // Dichiario la variabile del select per il cambio il livello di difficoltà
    const selectLevel = document.querySelector('.form-select');

    if (selectLevel.value == 1){
        document.getElementById("grid-container").innerHTML = "";

        gridContainer.classList.add("easy");
        gridContainer.classList.remove("medium", "hard");

        // Creo un ciclo FOR per il numero di quadrati da generare
        for (let i=0; i<100; i++){
        const newSquare = createNewSquare();

        newSquare.innerHTML = i + 1;

        newSquare.addEventListener("click", function(){
            newSquare.classList.toggle("clicked");
            console.log("Hai cliccato il numero " + (i + 1));
        });

        gridContainer.append(newSquare)
        }}

    if (selectLevel.value == 2){
        document.getElementById("grid-container").innerHTML = "";

        gridContainer.classList.add("medium");
        gridContainer.classList.remove("easy", "hard");

        // Creo un ciclo FOR per il numero di quadrati da generare
        for (let i=0; i<81; i++){
        const newSquare = createNewSquare();
    
        newSquare.innerHTML = i + 1;
    
        newSquare.addEventListener("click", function(){
            newSquare.classList.toggle("clicked");
            console.log("Hai cliccato il numero " + (i + 1));
        });
    
        gridContainer.append(newSquare)
        }}

    if (selectLevel.value == 3){
        document.getElementById("grid-container").innerHTML = "";

        gridContainer.classList.add("hard");
        gridContainer.classList.remove("medium", "easy");

        // Creo un ciclo FOR per il numero di quadrati da generare
        for (let i=0; i<49; i++){
        const newSquare = createNewSquare();
    
        newSquare.innerHTML = i + 1;
    
        newSquare.addEventListener("click", function(){
            newSquare.classList.toggle("clicked");
            console.log("Hai cliccato il numero " + (i + 1));
        });
    
        gridContainer.append(newSquare)
        }}
})


// Creo una funzione per la creazione di un nuovo quadrato
function createNewSquare (){
    const currentSquare = document.createElement("div");
    currentSquare.classList.add("square");
    return currentSquare;
}