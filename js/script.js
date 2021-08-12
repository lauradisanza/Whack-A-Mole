const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

//Random amount of time between moles popping up
function randTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//Random hole that the mole pops out of
function randomHole(holes) {
    
}