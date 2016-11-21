$(document).ready(function() {

  $('#getMessage').on('click', function(event) {
    event.preventDefault();

    $.getJSON('/quotes.json', function(json) {
      // how many quotes are in the json?
      var maxNrOfQuotes = json.length;
      // get random number between 0 to end of the quote list
      var selectedQuote = Math.floor(Math.random() * maxNrOfQuotes);
      // this is the random selected quote
      var aQuote = json[selectedQuote];

      // display the data using this variable
      var html = '';
      html += '<blockquote>';
      html += '<h5>' + aQuote.quote + '</h5> <i>' + aQuote.author + '</i>';
      html += '</blockquote>';

      $('.message').html(html);
    });

  });
});
