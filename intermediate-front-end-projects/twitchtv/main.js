//  See whether Free Code Camp is currently streaming on Twitch.tv.
//  Click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.
//  If a Twitch user is currently streaming, See additional details about what they are streaming.
//  I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.


$(document).ready(function($) {
  loadChanels();
});

function loadChanels () {
  $.getJSON('/path/to/file', {param1: 'value1'}, function(json, textStatus) {
      /*optional stuff to do after success */
  });
}
