var Main = (function ($) {
  var module = {};

  var names = [];
  var bidStore = [];

  module.init = function () {
    Helpers.log('Started client');
    Game.init();

    $.when(requestName(0), requestName(1)).then(function () {
      Renderer.renderStandings(Game.standings(), names);
    });
  }

  module.stepGame = function () {
    Renderer.resetBids();
    $.when(requestBid(0), requestBid(1)).then(function () {
      setTimeout(function () {
        Game.play(bidStore);
        Renderer.renderStandings(Game.standings(), names);
      }, config.waitAfterBid);
    });
  }

  function requestBid (playerId) {
    return request('game/bid', playerId, { standings: Game.personalStandings(playerId) }, function (data) {
      Helpers.log(names[0] + ' bid: ' + data.amount);
      Renderer.renderBid(playerId, data.amount);
      bidStore[playerId] = data.amount;
    });
  }

  function requestName (playerId) {
    return request('game/new', playerId, {}, function (data) {
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
