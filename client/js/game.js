var Game = (function () {
  var module = {};

  var standing = {
    coins: {},
    table: [],
    trophies: {}
  }

  module.init = function() {
    standing.coins[0] = config.startingCoins;
    standing.coins[1] = config.startingCoins;

    standing.trophies[0] = 0;
    standing.trophies[1] = 0;
  }

  return module;
}());
