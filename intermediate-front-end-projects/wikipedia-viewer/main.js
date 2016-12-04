// DESCRIPTION OF FUNCTIONALITY
// search field wiki articles
// scrol search results in page, with link to page
// click a button to see a random Wikipedia entry.

var searchVal = '';

$(document).ready(function() {
  randomArticle();

  $('#searchTerm').on('click', function() {
    alert();
    searchWiki();
  });

  $('input').keyup(function(event) {
    event.preventDefault();
    $('.searchLabel').removeClass('alert-box -warning');

    searchVal = $('#searchVal').val();
    if (searchVal !== '') {
      searchWiki();
    } else {
      // clear list if input is cleared
      $('.results').html('');
    }
    return false; 
  });
});

function alert () {
  // highligt input if user forgot to write search items 
  if (searchVal === '') {
    $('.searchLabel').addClass('alert-box -warning');
  } else {
    $('.searchLabel').removeClass('alert-box -warning');
  }
}

// open a random article
function randomArticle() {
  $('#random').on('click', function() {
    window.open('https://en.wikipedia.org/wiki/Special:Random');
  });
}

// search articles based on user input
function searchWiki(argument) {

  var wikiLink = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchVal + '&limit=20&callback=?';

  if (searchVal !== '' && $('.results').is(':empty')) {
    // show spinner until data is loaded
    $('.wait').addClass('spinner');
  }
    
  // load data
  $.getJSON(wikiLink, function(data) {

    var listResults = '';


    for (i = 0; i < data[1].length; i++) {
      var title = data[1][i];
      var description = data[2][i];
      var link = data[3][i];

      listResults += '<a href="' + link + '"><li>';
      listResults += '<h4>' + title + '</h4>';
      listResults += '<p>' + description + '</p>';
      listResults += '</li></a>';
    }
    
    $('.wait').removeClass('spinner');
    $('.results').html(listResults);

  });
}
