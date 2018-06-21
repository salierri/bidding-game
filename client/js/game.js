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

    delete standings.winner;
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

  module.play = function (bids) {
    standings.coins[0] += bids[1] - bids[0];
    standings.coins[1] += bids[0] - bids[1];
    bids[0] > bids[1] ? standings.trophies[0]++ : standings.trophies[1]++;
    checkVictory();
  }

  function checkVictory() {
    if(standings.trophies[0] >= config.winningTreshold) {
      standings.winner = 0;
    }
    else if(standings.trophies[1] >= config.winningTreshold) {
      standings.winner = 1;
    }
  }

  module.standings = function () {
    return standings;    
  }

  return module;
}());
