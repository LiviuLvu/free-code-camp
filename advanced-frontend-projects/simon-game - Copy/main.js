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

gameMemory = '';
userMemory = '';
level = 0;

$(document).ready(function() {
});

$('.b1').on('click', function() {
    playSound();
});

$('#start').on('click', function() {
    if (level == 0) {
        nextLevel();
        start();   
    }
});

$('#strict').on('click', function() {
    console.log('strict mode gameplay');
});

$('#reset').on('click', function() {
    console.log('reset game');
});

// if answer is correct, go to next level
function nextLevel() {
    level = level + 2;
    $('#count').text(level);
}

function start() {
    buttonsArr = [1, 2, 3, 4];
    count = level;

    while (count > 0) {
        console.log(count);

        setTimeout(function () {
        
            var randNr = buttonsArr[Math.floor(Math.random() * buttonsArr.length)];
            
            

            // play sound
            var beep = new Audio('sound/note'+ randNr +'.mp3');
            beep.play();
            
            gameMemory += randNr;
            
            $('.b'+ randNr).addClass('light');
            beep.play();

            $('.b'+ randNr).removeClass('light');
            count -= 1;
            
        }, 500);

    }
}

// function playSound() {
//     var beep = new Audio('sound/note'+ randNr +'.mp3');
//     beep.play();
// }
