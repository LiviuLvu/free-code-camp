// OK See whether Free Code Camp is currently streaming on Twitch.tv.
// OK Click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.
// OK If a Twitch user is currently streaming, See additional details about what they are streaming.
// I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed).


$(document).ready(function($) {
  loadChanels();

  // sort with the selected value
  $('input[name = filter-chanel]').on('click', function(event) {
    loadChanels();
  });

});

function loadChanels() {
  var channelsList = ["MedryBW", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
  var sortStatus = $('input[name = filter-chanel]:checked').val();

  // clear old data
  $('.channels').html('');

  channelsList.forEach(function(channel) {
    var channelStatus = '';

    $.ajax({
      type: 'GET',
      url: 'https://api.twitch.tv/kraken/streams/' + channel,
      headers: {
        'Accept': 'application/vnd.twitchtv.v3+json',
        'Client-ID': '9epvfqca5rr13kra8rwkdz2jodq57j'
      },
      success: function(data) {

        if (data.stream !== null && data.stream !== undefined) {
          channelStatus = "ONLINE";
        } else {
          channelStatus = "OFFLINE";
        }

        writeData();

      }
    });


    function writeData() {
      $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/channels/' + channel,
        headers: {
          'Accept': 'application/vnd.twitchtv.v3+json',
          'Client-ID': '9epvfqca5rr13kra8rwkdz2jodq57j'
        },
        success: function(data) {
          var logo = data.logo;
          var streamName = channel;
          var chanelLink = data.url;
          var description = '';
          var html = '';

          // if null show no description
          if (data.status !== null && channelStatus === 'ONLINE') {
            description = data.status;
          } else {
            description = '';
          }

          // sort channels if radio input option is on or off
          if (sortStatus == 'off' && channelStatus === "OFFLINE") {
            console.log('off');
            displayChannel();
          } else if (sortStatus == 'on' && channelStatus === "ONLINE") {
            console.log('on');
            displayChannel();
          } else if (sortStatus == 'all') {
            console.log('all');
            displayChannel();
          }

          function displayChannel() {
            // write data in dom
            html += '<div class="row"><a href="' + chanelLink + '"><img src="' + logo;
            html += '" alt="Stream Logo" class="two columns"></a><div class="eight columns"><h4>' + streamName;
            html += '</h4><p>' + channelStatus + '</p><p>' + description + '</p>';
            html += '<a href="' + chanelLink + '">Visit Channel</a></div></div><hr>';
            $('.channels').append(html);
          }

        }
      });
    }

  });
}

