
function TimerModule(timer, breakTimer) {
  var isOn = false;
  var interval, breakInterval;

  function count() {
    var minutes = parseInt(timer / 60, 10);
    var seconds = parseInt(timer % 60, 10);
    // put a 0 in front of one digit
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    $('.time').text(minutes + ":" + seconds);
    --timer;
    if (timer < 0) {
      $('.message').text('Good job, Timeout!');
      clearInterval(interval);
      this.takeBreak();
    } 
  }

  function timeoutCount() {
    var minutes = parseInt(breakTimer / 60, 10);
    var seconds = parseInt(breakTimer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    $('.time').text(minutes + ":" + seconds);
    --breakTimer;
    // if (timer < 0) {
    //   $('.message').text('Go for it!');
    //   clearInterval(breakInterval);
    //   this.start();
    // } 
  }

  this.start = function() {
    if (!this.isOn) {
      interval = setInterval(count.bind(this), 1000);
      $('.message').text('Go for it!');
    }
    this.isOn = true;
  };

  this.takeBreak = function() {
    breakInterval = setInterval(timeoutCount.bind(this), 1000);
  };

  this.reset = function() {
    clearInterval(interval);
    timer = 0;
    $('.message').text('Timer was reset to 0');
    $('.time').text('00' + ":" + '00');
    this.isOn = false;
  };
}


jQuery(function($) {

  $('input[value="Start"]').on('click', function(event) {
    var workVal = $('.work-val').val();
    var breakVal = $('.break-val').val();
    var timer = workVal * 60;
    var breakTimer = breakVal * 60;
    var pomodoro = new TimerModule(timer, breakTimer);

    pomodoro.start();

    $('input[value="Reset"]').on('click', function(event) {
      pomodoro.reset();
    });

  });


});
