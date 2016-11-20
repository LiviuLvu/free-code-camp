$(document).ready(function () {

   $('#getMessage').on('click', function(event) {
      event.preventDefault();

      $.getJSON('/cats.json', function(json) {
         // display the data using this variable
         var html = '';
         // filter out data we dont need
         json = json.filter(function (val) {
            return (val.id !== 1);
         });

         json.forEach( function (val) {
            var keys = Object.keys(val);

            html += '<div class = "cat">';
            html += '<img src = "' + val.imageLink + '"' + 'alt = "' + val.altText + '">';
            html += '</div>';
         });

         if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( function (position) {
               $('#data').html('latitude: ' + positon.coords.latitude + '<br>longitude: ' + position.coords.longitude);
            });
         }

         $('.message').html(html);
      });

   });
});
