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

// //
// CONTINUE from add button interaction with sound

var gameMemory = '';
var playerMemory = '';
var level = 0;
var countLevel = 0;
var buttonsArr = [1, 2, 3, 4];
var strictMode = 'off';

$('#start').on('click', function() {
  if (level === 0) {
    nextLevel();
    startSequence();
    $('#start').addClass('#start active');
  }
});

$('#strict').on('click', function() {
  if (strict === 'off') {
    strict = 'on';
    $('#strict').addClass('#strict active');
  }
  else {
    strict = 'off';
    $('#strict').removeClass('#strict active');
  }
});

$('#reset').on('click', function() {
  console.log('reset game');
});

$('.b1').on('click', function() {
  playSound(1);
  addToPlayerMemory(1);
  checkMemory();
});

$('.b2').on('click', function() {
  playSound(2);
  addToPlayerMemory(2);
  checkMemory();
});

$('.b3').on('click', function() {
  playSound(3);
  addToPlayerMemory(3);
  checkMemory();
});

$('.b4').on('click', function() {
  playSound(4);
  addToPlayerMemory(4);
  checkMemory();
});

// if answer is correct, go to next level
function nextLevel() {
  level = level + 1;
  countLevel = level;
  $('#count').text(level);
}

// record game memory based on game level, recursive function 


function startSequence() {
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
        startSequence();  
      }, 1000);

    }
  }

}

function playSound(sound) {
  var beep = new Audio('sound/note'+ sound +'.mp3');
  beep.play();
}

function addToPlayerMemory(nr) {
  playerMemory += nr;
}

function checkMemory() {
  console.log('player ' + playerMemory);
  if (playerMemory === gameMemory) {
    nextLevel();
    $('#count').text(level);
    // call startSequence
    startSequence();
  }
  else {
    $('#count').text('ups!');
  }
}