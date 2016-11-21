$(document).ready(function() {

  $.getJSON('free-code-camp/intermediate-front-end-projects/random_quote_machine/quotes.json', function(json) {

    function getNewQuote(event) {
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


      $('#sendTweet').on('click', function(event) {
        $(this).attr('href', 'https://twitter.com/intent/tweet?text=' + '" ' + aQuote.quote + ' "' + ' ' + aQuote.author);
      });
    }
    getNewQuote();

    if ($('#sendTweet').hasClass('disabled')) {
      $('#sendTweet').removeClass('disabled');
    }

    $('#getMessage').on('click', getNewQuote);


  });

});
