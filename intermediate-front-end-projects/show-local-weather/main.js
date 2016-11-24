// get weather in my current location on page load
// city, temperature
// icon weather indicator
// push button to toggle fahrenheit/celsius

// api key 9ae9a5ef6d1fead22bbd77b4b0a615b5

// DATA NOTES

// get location weather based on coordiantes
// http://api.openweathermap.org/data/2.5/weather?lat=45.7704186&lon=21.224092499999998&appid=9ae9a5ef6d1fead22bbd77b4b0a615b5


// // //
// below code returns very accurate location
// source: http://stackoverflow.com/questions/9053262/geolocation-html5-enablehighaccuracy-true-false-or-best-option

jQuery(document).ready(function($) {

navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback_highAccuracy,
    {maximumAge:600000, timeout:5000, enableHighAccuracy: true}

);

function errorCallback_highAccuracy(error) {
    if (error.code == error.TIMEOUT)
    {
        // Attempt to get GPS loc timed out after 5 seconds,
        // try low accuracy location
        $('body').append("attempting to get low accuracy location");
        navigator.geolocation.getCurrentPosition(
               successCallback,
               errorCallback_lowAccuracy,
               {maximumAge:600000, timeout:10000, enableHighAccuracy: false});
        return;
    }

    var msg = "<p>Can't get your location (high accuracy attempt). Error = ";
    if (error.code == 1)
        msg += "PERMISSION_DENIED";
    else if (error.code == 2)
        msg += "POSITION_UNAVAILABLE";
    msg += ", msg = "+error.message;

    $('body').append(msg);
}

function errorCallback_lowAccuracy(error) {
    var msg = "<p>Can't get your location (low accuracy attempt). Error = ";
    if (error.code == 1)
        msg += "PERMISSION_DENIED";
    else if (error.code == 2)
        msg += "POSITION_UNAVAILABLE";
    else if (error.code == 3)
        msg += "TIMEOUT";
    msg += ", msg = "+error.message;

    $('body').append(msg);
}

function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    $('body').append("<p>Your location is: " + latitude + "," + longitude+" </p><p>Accuracy="+position.coords.accuracy+"m");
}


///////////
// this code is inacurate
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(showPosition);
  // } else {
  //   console.log("Geolocation is not supported by this browser.");
  // }

  // function showPosition(position) {
  //   console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
  // }





  // $.getJSON( 'http://api.openweathermap.org/data/2.5/weather?q=Timisoara,RO&appid=9ae9a5ef6d1fead22bbd77b4b0a615b5', function( data ) {
  //     // work with the data

  //     console.log(data);
  //   });

});
