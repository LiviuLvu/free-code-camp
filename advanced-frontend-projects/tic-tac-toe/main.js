var humanPlayer, aiPlayer;
var activePlayer;
var move;
var movesRecorder = [0,0,0,0,0,0,0,0,0];
var gameEnd = false;

// choose player
$('.choice input').on('click', function() {
  humanPlayer = $(this).val();

  if (humanPlayer === 'x') {
    aiPlayer = 'o';
  }
  else {
    aiPlayer = 'x';
  }

  // hide form after player is chosen
  $('.settings').css('display', 'none');
  // show grid
  $('.game-grid').css('display', 'block');
  // first move is made by human
  activePlayer = humanPlayer;
  humanMove();
});

$('.restart-btn').on('click', function () {
  resetGame();
});

// switch players after each move
function switchTurn() {
  if (activePlayer === humanPlayer) {
    activePlayer = aiPlayer;
    aiMove();
  }
  else {
    activePlayer = humanPlayer;
    humanMove();
  }
}

function aiMove() {
  console.log('computer hei!');

  if (gameEnd) {
    console.log('AI is sad, game ended');
    return false;
  }

  move = movesRecorder.findIndex(function (element, index, array) {
    return element === 0;
  });

  emptySpot = $('.game-grid p').get(move);
  console.log(emptySpot);
  $(emptySpot).text(activePlayer);
  
  recordMove();
  isGameOver();
  switchTurn();
  console.log(movesRecorder);
}

function humanMove() {
  console.log('hei human!');
  $('.game-grid p').on('click', function () {
    // check if box is empty
    if ($(this).is(':empty')) {
      // write value in box
      $(this).text(activePlayer);
      // get index of clicked box
      move = $('.game-grid p').index($(this));
      // prevent accidental double clicks
      $('.game-grid p').off();
      recordMove();
      isGameOver();
      switchTurn();
    } 
  });
}
// record the choice in the moves aray
function recordMove() {
  movesRecorder[move] = activePlayer;
}

// check if game is over
function isGameOver() {
  var a = activePlayer;
  var i1 = $('#1').html();
  var i2 = $('#2').html();
  var i3 = $('#3').html();
  var i4 = $('#4').html();
  var i5 = $('#5').html();
  var i6 = $('#6').html();
  var i7 = $('#7').html();
  var i8 = $('#8').html();
  var i9 = $('#9').html();
  // current player is winner if game not tie
  if (i1===a & i2===a & i3===a) {
    highlightWin(1,2,3);
  }
  else if (i4===a & i5===a & i6===a) {
    highlightWin(4,5,6);
  }
  else if (i7===a & i8===a & i9===a) {
    highlightWin(7,8,9);
  }
  else if (i1===a & i4===a & i7===a) {
    highlightWin(1,4,7);
  }
  else if (i2===a & i5===a & i8===a) {
    highlightWin(2,5,8);
  }
  else if (i3===a & i6===a & i9===a) {
    highlightWin(3,6,9);
  }
  else if (i1===a & i5===a & i9===a) {
    highlightWin(1,5,9);
  }
  else if (i3===a & i5===a & i7===a) {
    highlightWin(3,5,7);
  }
  else {
    isTie();
  }

}

// check if game is over and game is tie
function isTie() {
  var boardFull = movesRecorder.every(function(element) {
    return element !== 0;
  });
  if (boardFull) {
    console.log('Game is Tie! Nobody won.');
    $('.restart-btn').removeClass('hidden');
    $('.message').text('Game is Tie! Nobody won.');
  }
}

// highlight win state with color
function highlightWin(x,y,z) {
  if (activePlayer === humanPlayer) {
    console.log('You winner, you!');
    console.log(activePlayer + ' is active player');
  }
  $('#' + x +','+ '#' + y +','+ '#' + z).addClass('winstate');
  $('.message').html('Player "' + activePlayer + '" wins!');
  $('.restart-btn').removeClass('hidden');
  gameEnd = true;
  $('.game-grid p').off();
}

function resetGame() {
  console.log('game reset');
  $('#1, #2, #3, #4, #5, #6, #7, #8, #9').empty().removeClass('winstate');
  movesRecorder = [0,0,0,0,0,0,0,0,0];

  $('.settings').css('display', 'block');
  $('.game-grid').css('display', 'none');
  $('.restart-btn').addClass('hidden');
  $('.message').empty();
  $('.game-grid p').on('click', function () {
    humanMove();
  });
}
