// display select player on new game
// hide select form after option is chosen, show on restart
// ai move is triggered after human moved
// prevent same square being used more than once - check square.text()
// current player is winner if game not tie
// check if game is over
// reset board on game over

// default value for human player
var human = 'x';

$('input').on('click', function() {
  human = $('input:checked').val();
  $('form').css('display', 'none');
});
