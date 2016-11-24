// DESCRIPTION OF FUNCTIONALITY
// get weather in my current location on page load
// city, temperature
// icon weather indicator
// push button to toggle fahrenheit/celsius


// DATA NOTES
// api key af24923e752f84ec, 9ae9a5ef6d1fead22bbd77b4b0a615b5
// get location weather based on coordiantes
// 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=9ae9a5ef6d1fead22bbd77b4b0a615b5'
// http://api.wunderground.com/api/af24923e752f84ec/geolookup/q/' + latitude + ',' + longitude + '.json

jQuery(document).ready(function($) {

  // getCurrentPosition() is deprecated

  // get geolocation
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback_highAccuracy, { maximumAge: 600000, timeout: 5000, enableHighAccuracy: true });
  }

  function errorCallback_highAccuracy(error) {
    if (error.code == error.TIMEOUT) {
      // Attempt to get GPS loc timed out after 5 seconds,
      // try low accuracy location
      $('.coordinates').text("attempting to get low accuracy location");
      navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback_lowAccuracy, { maximumAge: 600000, timeout: 10000, enableHighAccuracy: false });
      return;
    }

    var msg = "Can't get your location (high accuracy attempt). Error = ";
    if (error.code == 1)
      msg += "PERMISSION_DENIED";
    else if (error.code == 2)
      msg += "POSITION_UNAVAILABLE";
    msg += ", msg = " + error.message;

    $('.coordinates').text(msg);
  }

  function errorCallback_lowAccuracy(error) {
    var msg = "Can't get your location (low accuracy attempt). Error = ";
    if (error.code == 1)
      msg += "PERMISSION_DENIED";
    else if (error.code == 2)
      msg += "POSITION_UNAVAILABLE";
    else if (error.code == 3)
      msg += "TIMEOUT";
    msg += ", msg = " + error.message;

    $('.coordinates').text(msg);
  }

  function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    $('.coordinates').text("Latitude: " + latitude + ", Longitude: " + longitude + " Accuracy=" + position.coords.accuracy + "m");

    // start working with the data
    $.getJSON('http://api.wunderground.com/api/af24923e752f84ec/geolookup/conditions/q/' + latitude + ',' + longitude + '.json' + latitude + '&lon=' + longitude + '&appid=9ae9a5ef6d1fead22bbd77b4b0a615b5', function(data) {

      var temperature = data.current_observation.temp_c;

      $('.temperature').text(temperature + 'C');

      $('.temperatureSwitch').on('click', function(event) {
        if (temperature === data.current_observation.temp_c) {
          temperature = data.current_observation.temp_f;
          $('.temperature').text(temperature + 'F');
        } else {
          temperature = data.current_observation.temp_c;
          $('.temperature').text(temperature + 'C');
        }
      });

      $('.location').text(data.location.city + ', ' + data.location.country);
      $('.weather').text(data.current_observation.weather);
      $('.icon').attr('alt', data.current_observation.icon);
      $('.icon').attr('src', data.current_observation.icon_url);

      // console.log(data);
    });

  }

});
