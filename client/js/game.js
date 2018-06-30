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
    checkCheating(0, bids);
    checkCheating(1, bids);
    standings.coins[0] += bids[1] - bids[0];
    standings.coins[1] += bids[0] - bids[1];
    checkTrophie(0, bids);
    checkTrophie(1, bids);
    checkVictory();
  }

  function checkTrophie(player, bids) {
    var other = 1 - player;
    if(bids[player] > bids[other] || (bids[player] == bids[other] && standings.coins[player] > standings.coins[other])) {
      standings.trophies[player]++;
    }
  }

  function checkVictory() {
    if(standings.trophies[0] >= config.winningTreshold) {
      standings.winner = 0;
    }
    else if(standings.trophies[1] >= config.winningTreshold) {
      standings.winner = 1;
    }
  }

  function checkCheating(player, bids) {
    var other = 1 - player;
    if(bids[player] > standings.coins[player] || bids[player] < 0) {
      Helpers.log('Player ' + player + ' is possibly cheating!');
    }
  }

  module.standings = function () {
    return standings;    
  }

  return module;
}());
