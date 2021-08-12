const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;

//Random amount of time between moles popping up
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//Random hole that the mole pops out of
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    //Make sure the same hole is twice in a row
    if (hole === lastHole) {
        return randomHole(holes);
    }

    lastHole = hole;
    return hole;
}

//Moles popping up
function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    //Make mole pop up
    hole.classList.add('up');
    //Make mole go back down
    setTimeout(() => {
        hole.classList.remove('up');
    }, time);
}