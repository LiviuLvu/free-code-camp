
function TimerModule(timer) {
  var isOn = false;
  var interval;

  function count() {
    console.log(timer);
    var minutes = parseInt(timer / 60, 10);
    var seconds = parseInt(timer % 60, 10);
    // put a 0 in front of one digit
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    $('.time').text(minutes + ":" + seconds);
    --timer;
    if (timer < 0) {
      $('.message').text('Hooray, Timeout!');
      clearInterval(interval);
      // to do: call the takeBreak function
    } 
  }

  function takeBreak() {
    // to do: code for the break time
    // to do: at end of run call count functinon
  }

  this.start = function() {
    if (!this.isOn) {
      interval = setInterval(count.bind(this), 1000);
      $('.message').text('Go for it!');
    }
    this.isOn = true;
  };

  this.reset = function() {
    clearInterval(interval);
    timer = 0;
    $('.work-val').val(0);
    $('.message').text('Timer was reset to 0');
    $('.time').text('00' + ":" + '00');
    this.isOn = false;
  };
}


jQuery(function($) {

  $('input[value="Start"]').on('click', function(event) {
    var workVal = $('.work-val').val();
    var timer = workVal * 60;
    var pomodoro = new TimerModule(timer);

    pomodoro.start();

    $('input[value="Reset"]').on('click', function(event) {
      pomodoro.reset();
    });

  });


});
