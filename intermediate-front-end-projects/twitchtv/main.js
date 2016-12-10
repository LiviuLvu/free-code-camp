// See whether Free Code Camp is currently streaming on Twitch.tv.
// Click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.
// If a Twitch user is currently streaming, See additional details about what they are streaming.
// I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed).


var channelsList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

$(document).ready(function($) {
  // loadChanels();
});

function loadChanels() {
  channelsList.forEach(function(element) {

    $.ajax({
      type: 'GET',
      // url: 'https://api.twitch.tv/kraken/streams?channel=ESL_SC2,OgamingSC2,cretetion,freecodecamp,storbeck,habathcx,RobotCaleb,noobs2ninjas',
      url: 'https://api.twitch.tv/kraken/streams?channel=' + element,
      headers: {
        'Accept': 'application/vnd.twitchtv.v3+json',
        'Client-ID': '9epvfqca5rr13kra8rwkdz2jodq57j'
      },
      success: function(data) {
        console.log(data);
      }
    });

  });

}

// make entire row a clickable link
$('tr').click(function() {
    window.location = $(this).find('a').attr('href');
  })
  .hover(function() {
    $(this).css('cursor','pointer');
  });
