// switch players after each move
// ai move is triggered after activePlayer moved
// check if game is over
// current player is winner if game not tie
// reset board on game over
// show select player on restart

// default value for activePlayer player
var humanPlayer, aiPlayer;
var turn, move;
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
  // $('.game-grid').css('display', 'block');
  turn = 'human';
  humanMove();
});

function humanMove() {
  if (turn === 'human') {
    console.log('human');
    // write and record human player move
    $('.game-grid p').on('click', function() {
      // write symbol if box is empty
      if ($(this).is(':empty')) {
        // write value
        $(this).text(humanPlayer);

        // get index of clicked box
        move = $('.game-grid p').index($(this));
        recordMove();
        turn = 'aiPlayer';
        computerMove();
      }
    });

  }
}

function computerMove() {
  if (turn === 'aiPlayer') {
    console.log('ai');
    $('.game-grid p').on('click', function() {
      if ($(this).is(':empty')) {
        $(this).text(aiPlayer);
        move = $('.game-grid p').index($(this));
        recordMove();
        turn = 'human';
        humanMove();
      }
    });

  }
}

// record the choice in the moves aray
function recordMove() {
  var activePlayer;
  if (turn === 'human') {
    activePlayer = humanPlayer;
  }
  else {
    activePlayer = aiPlayer;
  }

  movesRecorder[move] = activePlayer;
  console.log(movesRecorder);
}
