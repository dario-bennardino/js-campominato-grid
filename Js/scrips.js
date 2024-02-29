
const gridContainer = document.querySelector('.grid-container');

reset ();

//inizio ciclo for
for(let i = 1; i<=100; i++){
    const square = getSquare();
    gridContainer.append(square)

}


//FUNCTIONS

//funzione per resettare il gioco
function reset(){
    gridContainer.innerHTML = '';
    
}

//funzione per creare il quadrato
function getSquare(){
    const sq = document.createElement('div');
    sq.className = 'square';

    return sq;
}
