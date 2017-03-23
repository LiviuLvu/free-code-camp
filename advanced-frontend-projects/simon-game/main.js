// add step after each correct answer
// replay reminder on wrong answer
// display step
// win game on step 20 compvared
// show win message

// restart btn function

// strict mode btn function
// reset game on wrong move
// show error !!

// create hghtlight for each button
// hear sound on button press

var gameMemory = '';
var userMemory = '';
var level = 0;
var countLevel = 0;
var buttonsArr = [1, 2, 3, 4];

$('.b1').on('click', function() {
  playSound();
});

$('#start').on('click', function() {
  if (level === 0) {
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
  countLevel = level;
  $('#count').text(level);
}

// record game memory based on game level, recursive function 


function start() {
  setTimeout(delayMe(), 2000);

  function delayMe() {

    if (countLevel > 0) {
      
      var randNr = buttonsArr[Math.floor(Math.random() * buttonsArr.length)];
      playSound(randNr);
      gameMemory += randNr;
      console.log('game code is ' + gameMemory);

      $('.b' + randNr).addClass('light');

      // turn light off on the button
      setTimeout(function() {
        $('.b' + randNr).removeClass('light');
      }, 500);

      // call the function again 
      setTimeout(function() {
        countLevel--;
        start();  
      }, 1000);

    }
  }

}

function playSound(sound) {
  var beep = new Audio('sound/note'+ sound +'.mp3');
  beep.play();
}
