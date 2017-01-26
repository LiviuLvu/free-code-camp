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
var movesRecorder = ['n','n','n','n','n','n','n','n','n'];

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
  console.log(activePlayer);
  // check if box is empty
  if ($(this).is(':empty')) {
    // write value in box
    $(this).text(activePlayer);
    // get index of clicked box
    move = $('.game-grid p').index($(this));
    recordMove();
    switchTurn();
  }
});

// record the choice in the moves aray
function recordMove() {
  movesRecorder[move] = activePlayer;
  console.log(movesRecorder);
}
