var Main = (function ($) {
  var module = {};

  var names = [];
  var bidStore = [];

  module.init = function () {
    Helpers.log('Started client');
    Game.init();
    requestName(0);
    requestName(1);
  }

  module.stepGame = function () {
    $.when(requestBid(0), requestBid(1)).then(function () {
      Game.play(bidStore);
      Renderer.render(Game.standings());
    });
  }

  function requestBid (playerId) {
    return request('game/bid', playerId, { standings: Game.personalStandings(playerId) }, function (data) {
      Helpers.log(names[0] + ' bid: ' + data.amount);
      bidStore[playerId] = data.amount;
    });
  }

  function requestName (playerId) {
    request('game/new', playerId, {}, function (data) {
      names[playerId] = data.name;
      Helpers.log('Player' + playerId + ': ' + data.name);
    });
  }

  function request(url, playerId, body, callback) {
    return $.ajax({
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
