// add step after each correct answer
// replay reminder on wrong answer
// display step
// win game on step 20 completed
// show win message

// restart btn function

// strict mode btn function
// reset game on wrong move
// show error !!

// create hghtlight for each button
// hear sound on button press
playArr = [1, 2, 3, 4];

// read random number from array
var rand = playArr[Math.floor(Math.random() * playArr.length)];
console.log(rand);
// light up button
$('.b'+ rand).addClass('light');

function playSound() {
    var beep = new Audio('sound/note'+ rand +'.mp3');
    beep.play();
}


setTimeout(function () {
        $('.b'+ rand).removeClass('light');
    }, 500);

$('.btn').on('click', function(e) {
    e.preventDefault();
    console.log('sound');
    playSound();
});

$(document).ready(function() {
});

$('#start').on('click', function() {
    console.log('start game');
});

$('#strict').on('click', function() {
    console.log('strict mode gameplay');
});

$('#reset').on('click', function() {
    console.log('reset game');
});
