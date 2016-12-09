//  See whether Free Code Camp is currently streaming on Twitch.tv.
//  Click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.
//  If a Twitch user is currently streaming, See additional details about what they are streaming.
//  I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.


// Client ID 9epvfqca5rr13kra8rwkdz2jodq57j

$(document).ready(function($) {
  loadChanels();
});

function loadChanels() {
  // $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/hebo', function(data) {
  //     console.log(data);
  // });

//   $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
//   console.log(data);
// });

  $.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams?channel=ESL_SC2,OgamingSC2,cretetion,freecodecamp,storbeck,habathcx,RobotCaleb,noobs2ninjas',
    headers: {
     'Client-ID': '9epvfqca5rr13kra8rwkdz2jodq57j'
    },
    success: function(data) {
      console.log(data);
    }
  });



}
