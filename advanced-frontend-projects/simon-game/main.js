var gameMemory = '';
var playerMemory = '';
var level = 0;
var countLevel = 0;
var replayStep = 0;
var buttonsArr = [1, 2, 3, 4];
var strict = 'off';
var youWinInterval;

$('.start').on('click', function() {
  if (level === 0) {
    nextLevel();
    startSequence();
    $('.start').addClass('.start active');
  }
});

$('.strict').on('click', function() {
  if (strict === 'off') {
    strict = 'on';
    $('.strict').addClass('.strict active');
    $('#display').text('on');
  }
  else {
    strict = 'off';
    $('.strict').removeClass('.strict active');
    $('#display').text('off');
  }
});

$('.reset').on('click', function() {
  resetGame();
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

function nextLevel() {
  gameMemory = '';
  playerMemory = '';

  level = level + 1;
  countLevel = level;
  $('#display').text(level);
}

function startSequence() {
  setTimeout(delaySeq(), 500);
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
    }, 500);

  }
}

function replay() {
  setTimeout(function () {
    delayReplay();
  }, 500);
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
  // win state
  if (level === 20 && playerMemory === gameMemory && playerMemory.length === gameMemory.length) {
    $('#display').text('you');
    $('.start').removeClass('.start active');
    
    var youWinInterval = setInterval(function() {
      if ( $('#display:contains("you")') ) {
        $('#display').text('win');
        
        $('.start').addClass('.start active');
        $('.strict').addClass('.strict active');
        $('.reset').addClass('.reset active');
      }
      else {
        $('#display').text('win');
      }
    }, 700);

  }
  // wrong answer
  else if (playerMemory.length === gameMemory.length && playerMemory !== gameMemory) {
    
    if (strict === 'off') {
      replayStep = 0;
      $('#display').text('redo');
      replay();
      playerMemory = '';
    }
    else if (strict === 'on') {
      $('#display').text('fail');
      setTimeout(function() {
        resetGame();
      }, 1000);
    }
  }
  // correct answer
  else if (playerMemory === gameMemory) {
    nextLevel();
    setTimeout(function() {
        startSequence();  
    }, 1000);
  }
}

function resetGame() {
  clearInterval(youWinInterval);
  gameMemory = '';
  playerMemory = '';
  level = 0;
  countLevel = 0;
  replayStep = 0;
  strict = 'off';
  $('.start').removeClass('.start active');
  $('.strict').removeClass('.strict active');
  $('#display').text('00');
}