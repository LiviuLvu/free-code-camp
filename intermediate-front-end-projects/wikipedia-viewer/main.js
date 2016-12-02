// DESCRIPTION OF FUNCTIONALITY
// search field wiki articles
// scrol search results in page
// click a button to see a random Wikipedia entry.

// https://en.wikipedia.org/wiki/Special:Random


$(document).ready(function() {
  loadWiki();
});

function loadWiki () {
  $('#random').on('click', function(event) {
    window.open('https://en.wikipedia.org/wiki/Special:Random');
  });
}
