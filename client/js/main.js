var main = (function ($) {
  var module = {};

  module.init = function() {
    Helpers.log('Started client');
    request('game/new', 0, {}, function(data) {
      Helpers.log('Player1: ' + JSON.stringify(data));
    });
  }

  function request(url, playerId, body, callback) {
    Helpers.log(config.players[playerId].url + url);
    $.post(config.players[playerId].url + url, body)
      .done(callback)
      .fail(function(data, data2, data3) {
        Helpers.log('Fail: ' + JSON.stringify(data) + JSON.stringify(data2) + JSON.stringify(data3));
      });
  }

  return module;
}(jQuery));

$(document).ready(main.init)
