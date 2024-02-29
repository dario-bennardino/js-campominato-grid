
const gridContainer = document.querySelector('.grid-container');

reset ();

//inizio ciclo for
for(let i = 1; i<=100; i++){
    const square = getSquare(i);
    gridContainer.append(square)

}


//FUNCTIONS



//funzione per creare il quadrato

function getSquare(numero){
    const sq = document.createElement('div');
    sq.className = 'square';
    // sq.innerHTML = numero;

    //creo una proprietà custom all'interno dell'elemento HTML e la chiamo _sqID
    sq._sqID = numero;

    sq.addEventListener('click', function(){
        //this mi restituisce l'elemento contenitore 
        console.log(this._sqID);
    })

    
    return sq;
}




//funzione per resettare il gioco
function reset(){
    gridContainer.innerHTML = '';
    
}
