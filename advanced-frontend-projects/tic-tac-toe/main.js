
// ai move is triggered after human moved
// check if game is over
// current player is winner if game not tie
// reset board on game over
// show select player on restart

// default value for human player
var human = 'x';
var movesRecorder = [0,0,0,0,0,0,0,0,0];

// choose player
$('.choice input').on('click', function() {
  human = $(this).val();
  // hide form after player is chosen
  // $('.settings').css('display', 'none');
  // display grid
  $('.game-grid').css('display', 'block');
});

// place value to grid on click if box is empty
$('.game-grid p').on('click', function() {
  if ($(this).is(':empty')) {
    $(this).text(human);
  }
});
