var main = (function ($) {
  var module = {};

  module.init = function() {
    Helpers.log('Started client');
    request('game/new', 0, {}, function (data) {
      Helpers.log('Player1: ' + data.name);
    });

    request('game/bid', 0, { standings: Game.personalStandings(0) }, function (data) {
      Helpers.log('Player1 bid: ' + data.amount);
    });
  }

  function request(url, playerId, body, callback) {
    $.ajax({
      url: config.players[playerId].url + url,
      type: 'POST',
      data: JSON.stringify(body),
      contentType: 'application/json',
      dataType: 'json',
      success: callback,
      error: function (data) {
        Helpers.log('Request failed, url: ' + config.players[playerId].url + url + ', data: ' + JSON.stringify(data));
      }
    });
  }

  return module;
}(jQuery));

$(document).ready(main.init)
