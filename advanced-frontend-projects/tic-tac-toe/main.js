// switch players after each move
// ai move is triggered after activePlayer moved
// check if game is over
// current player is winner if game not tie
// reset board on game over
// show select player on restart

// default value for activePlayer player
var humanPlayer, aiPlayer;
var activePlayer;
var move;
var movesRecorder = [0,0,0,0,0,0,0,0,0];

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

  activePlayer = humanPlayer;
});

function switchTurn() {
  if (activePlayer === humanPlayer) {
    activePlayer = aiPlayer;
  }
  else {
    activePlayer = humanPlayer;
  }
}

$('.game-grid p').on('click', function() {
  // check if box is empty
  if ($(this).is(':empty')) {
    // write value in box
    $(this).text(activePlayer);
    // get index of clicked box
    move = $('.game-grid p').index($(this));
    recordMove();
    isGameOver();
    isTie();
    switchTurn();
  }
});

// record the choice in the moves aray
function recordMove() {
  movesRecorder[move] = activePlayer;
  // console.log(movesRecorder);
}

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

  if (i1===a & i2===a & i3===a ||
      i4===a & i5===a & i6===a ||
      i7===a & i8===a & i9===a ||
      i1===a & i4===a & i7===a ||
      i2===a & i5===a & i8===a ||
      i3===a & i6===a & i9===a ||
      i1===a & i5===a & i9===a ||
      i3===a & i5===a & i7===a ) {
    console.log(activePlayer + ' won!');
  }
}

function isTie() {
  var boardFull = movesRecorder.every(function(element) {
    return element !== 0;
  });
  if (boardFull) {
    console.log('Game is Tie! Nobody won.');
  }
}
