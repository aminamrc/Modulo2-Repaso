'use strict';

const userSelection=document.querySelector('.js-selection');
const btn=document.querySelector('.js-btn');

//Funcion Listener
function Listener(event) {
    event.preventDefault ();
    console.log('Se hizo clic en el botón');
    console.log (getRandomNumber (9));
    comparison ();
    renderResult ();
    
}

btn.addEventListener('click', Listener);

//Funcion GetRandomNumber
function getRandomNumber (max) {
    return Math.ceil (Math.random() *max);
    
};


//Funcion Comparison 
function comparison () {
    const number= getRandomNumber (9);
    let movement = "";  
    if (number <= 3) {
    movement= "piedra";
    } 
    else if (number < 7){
    movement= "tijera";
    } else if (number >= 7){
    movement= "papel";
    } return movement;
};





//Funcion Play
function play () {
    const movement= comparison (number);
    const moveUser= userSelection.value;
    if (moveUser === movement ) {
        renderResult ('empate');
    } 

    };

const result=document.querySelector ('.js-result');

//Funcion Render
function renderResult (text) {
    result.innerHTML=text;

}


