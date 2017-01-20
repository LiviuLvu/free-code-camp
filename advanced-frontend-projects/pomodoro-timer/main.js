
function TimerModule(timer, breakTimer) {
  var isOn = false;
  var interval, breakInterval;
  var localTimer = timer;
  var localBreakTimer = breakTimer;
  var keepCount;

  // function countTime(selectedTimer) {
  //   var minutes, seconds;



  //   minutes = parseInt(selectedTimer / 60, 10);
  //   seconds = parseInt(selectedTimer % 60, 10);
  //   // put a 0 in front of one digit
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;
  //   $('.time').text(minutes + ":" + seconds);

  //   keepCount = --selectedTimer;
  //   console.log(selectedTimer);
  //   console.log(keepCount);
  //   console.log(selectedTimer < keepCount);
  //   if (selectedTimer < keepCount) {
  //     selectedTimer = keepCount;
  //   }

  //   if (selectedTimer < 0) {
  //     return true;
  //   }

  //   return false;
  // }

  // function count2() {
  //   var keepCount = localTimer;
  //   var isDone = countTime(localTimer);

  //   if (isDone) {
  //     $('.message').text('Good job, Timeout!');
  //     clearInterval(interval);
  //     this.takeBreak();
  //   } 
  // }

  // function timeoutCount2() {
  //   var isDone = countTime(localBreakTimer);
  //   if (isDone) {
  //     $('.message').text('Stay focused!');
  //     clearInterval(breakInterval);
  //     interval = setInterval(count2.bind(this), 1000);
  //   } 
  // }

  /////

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
      $('.message').text('Good job, Timeout!');
      clearInterval(interval);
      this.takeBreak();
    } 
  }

  function timeoutCount() {
    if (breakTimer < 0) {
      breakTimer = $('.break-val').val() * 60;
    }

    var minutes = parseInt(breakTimer / 60, 10);
    var seconds = parseInt(breakTimer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    $('.time').text(minutes + ":" + seconds);

    --breakTimer;
    if (breakTimer < 0) {
      $('.message').text('Stay focused!');
      clearInterval(breakInterval);
      interval = setInterval(count.bind(this), 1000);
    } 
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
    clearInterval(breakInterval);
    $('.message').text('Timer was reset to 0');
    $('.time').text('00' + ":" + '00');
    this.isOn = false;
  };
}


jQuery(function($) {

  $('input[value="Start"]').on('click', function(event) {
    var timer = $('.work-val').val() * 60;
    var breakTimer = $('.break-val').val() * 60;

    var pomodoro = new TimerModule(timer, breakTimer);

    pomodoro.start();

    $('input[value="Reset"]').on('click', function(event) {
      pomodoro.reset();
    });

  });


});
