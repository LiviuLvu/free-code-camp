var isOn = 'off';

jQuery(function($) {
  $('input[value="Start"]').on('click', function(event) {
    var pomodoro = new TimerModule();
    pomodoro.start();

    $('input[value="Reset"]').on('click', function(event) {
      pomodoro.reset();
    });
  });

});

function TimerModule() {
  var timer = $('.work-val').val() * 60;
  var breakTimer = $('.break-val').val() * 60;
  var interval, breakInterval;
  var localTimer = timer;
  var localBreakTimer = breakTimer;
  var audio = new Audio('sound/ding.mp3');

  function count() {
    if (localTimer < 0) {
      localTimer = timer;
    }

    var minutes = parseInt(localTimer / 60, 10);
    var seconds = parseInt(localTimer % 60, 10);
    // put a 0 in front of one digit
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    $('.time').text(minutes + ":" + seconds);

    --localTimer;

    if (localTimer < 0) {
      clearInterval(interval);
      this.takeBreak();
      audio.play();
    } 
  }

  function timeoutCount() {
    if (localBreakTimer < 0) {
      localBreakTimer = breakTimer;
    }

    var minutes = parseInt(localBreakTimer / 60, 10);
    var seconds = parseInt(localBreakTimer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    $('.time').text(minutes + ":" + seconds);

    --localBreakTimer;

    if (localBreakTimer < 0) {
      $('.message').text('Stay focused!');
      clearInterval(breakInterval);
      isOn = 'off';
      this.start();
      audio.play();
    } 
  }

  this.start = function() {
    if (isOn === 'off') {
      interval = setInterval(count.bind(this), 1000);
    }
    isOn = 'on';

    $('.message').text('Go for it!');
    $('.message, .time').css('color','green');
  };

  this.takeBreak = function() {
    breakInterval = setInterval(timeoutCount.bind(this), 1000);
    $('.message').text('Good job, Timeout!');
    $('.message, .time').css('color','red');
  };

  this.reset = function() {
    clearInterval(interval);
    clearInterval(breakInterval);
    $('.message').text('Timer was reset to 0');
    $('.time').text('00' + ":" + '00');
    isOn = 'off';
  };
}
