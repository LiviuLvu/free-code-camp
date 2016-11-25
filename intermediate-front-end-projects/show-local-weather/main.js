// DESCRIPTION OF FUNCTIONALITY
// show location temperature
// icon weather indicator
// push button to toggle fahrenheit/celsius

jQuery(document).ready(function($) {

  // getCurrentPosition() is deprecated

  // if ('geolocation' in navigator) {
  //   navigator.geolocation.getCurrentPosition(successCallback);
  // }

  function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    $('.coordinates').text("Latitude: " + latitude + ", Longitude: " + longitude + " Accuracy=" + position.coords.accuracy + "m");

  // start working with the data
  // $.getJSON('http://api.wunderground.com/api/af24923e752f84ec/geolookup/conditions/q/' + latitude + ',' + longitude + '.json' + latitude + '&lon=' + longitude + '&appid=9ae9a5ef6d1fead22bbd77b4b0a615b5', function(data) {

  $.getJSON('http://api.wunderground.com/api/af24923e752f84ec/geolookup/conditions/q/autoip.json', function(data) {    

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

      console.log(data);
    });

  }

});
