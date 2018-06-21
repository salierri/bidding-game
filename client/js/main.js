var main = (function ($) {
  var module = {};

  var names = [];

  module.init = function() {
    Helpers.log('Started client');
    Game.init();
    request('game/new', 0, {}, function (data) {
      names[0] = data.name;
      Helpers.log('Player1: ' + data.name);
    });

    request('game/bid', 0, { standings: Game.personalStandings(0) }, function (data) {
      Helpers.log(names[0] + ' bid: ' + data.amount);
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
        Helpers.log('Request failed, url: ' + config.players[playerId].url + url + ', details: ' + JSON.stringify(data));
      }
    });
  }

  return module;
}(jQuery));

$(document).ready(main.init)
