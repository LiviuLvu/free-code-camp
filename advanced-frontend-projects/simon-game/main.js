// TO DO LIST
// restart btn function
// win game on step 20
// show win message
// reset game on wrong move

var gameMemory = '';
var playerMemory = '';
var level = 0;
var countLevel = 0;
var replayStep = 0;
var buttonsArr = [1, 2, 3, 4];
var strict = 'off';

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
    $('#display').text('on');
  }
  else {
    strict = 'off';
    $('#strict').removeClass('#strict active');
    $('#display').text('off');
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
  gameMemory = '';
  playerMemory = '';

  level = level + 1;
  countLevel = level;
  $('#display').text(level);
}

function startSequence() {
  setTimeout(delaySeq(), 1000);
}

function delaySeq() {
  if (countLevel > 0) {
    
    var randNr = buttonsArr[Math.floor(Math.random() * buttonsArr.length)];
    playSound(randNr);
    gameMemory += randNr;
    
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

function replay() {
  setTimeout(function () {
    delayReplay();
  }, 1000);
}

function delayReplay() {
  if (gameMemory.length > replayStep) {
    var nr = gameMemory.charAt(replayStep);

    playSound(nr);
    $('.b' + nr).addClass('light');
    setTimeout(function () {
      $('.b' + nr).removeClass('light');
    }, 500);

    replayStep += 1;
    replay();
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
  $('#display').text('...');

  if (playerMemory === gameMemory) {
    nextLevel();
    setTimeout(function() {
        startSequence();  
    }, 1000);
  }
  else if (playerMemory !== gameMemory && playerMemory.length === gameMemory.length) {
    
    if (strict === 'off') {
      replayStep = 0;
      $('#display').text('redo');
      replay();
      playerMemory = '';
    }
    else {
      // restart game

    }
  }
}
