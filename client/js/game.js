var Game = (function () {
  var module = {};

  var standings = {
    coins: {},
    table: [],
    trophies: {}
  }

  module.init = function () {
    standings.coins[0] = config.startingCoins;
    standings.coins[1] = config.startingCoins;

    standings.trophies[0] = 0;
    standings.trophies[1] = 0;
  }

  module.personalStandings = function (player) {
    var other = 1 - player;
    return {
      coins: {
        own: standings.coins[player],
        other: standings.coins[other]
      },
      table: [],
      trophies: {
        own: standings.trophies[player],
        other: standings.trophies[other]
      }
    }
  }

  return module;
}());
