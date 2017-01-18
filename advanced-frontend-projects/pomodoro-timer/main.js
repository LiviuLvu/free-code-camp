// possible solution

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;

  var cocos = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes + ":" + seconds);

    --timer;

    if (timer < 0) {
      $('.message').text('Hooray! Break the walls!');
      clearInterval(cocos);
    }
  }, 1000);

}

// function clearTimer(display) {
//   clearInterval();
// }

jQuery(function($) {

  $('input[value="Start"]').on('click', function(event) {
    // time in seconds
    var workVal = $('.work-val').val();
    // var breakVal = $('.break-val').val();
    var workDuration = workVal * 60;
    // var breakDuration = breakVal * 60;
    var display = $('.time');

    console.log(workVal);
    startTimer(workDuration, display);
  });


});
