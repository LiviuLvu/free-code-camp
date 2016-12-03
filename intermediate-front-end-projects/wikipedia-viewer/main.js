// DESCRIPTION OF FUNCTIONALITY
// search field wiki articles
// scrol search results in page
// click a button to see a random Wikipedia entry.


// show error for no results found (if arr.length = 0) {...};

// https://en.wikipedia.org/w/api.php?action=opensearch&limit=20&search=[]&format=json
// https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=[...]&limit=20&profile=fuzzy&formatversion=2


$(document).ready(function() {
  randomArticle();
  searchWiki();
});

function randomArticle() {
  $('#random').on('click', function(event) {
    window.open('https://en.wikipedia.org/wiki/Special:Random');
  });
}

function searchWiki() {
  $('#searchTerm').on('click', function(e) {
    var searchVal = $('#searchVal').val();
    var wikiLink = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchVal + '&limit=20&callback=?';
    $.getJSON(wikiLink, function(data) {
      console.log(data);
      $('.results').html('<li>' +  + '</li>');
    });
  });
}
