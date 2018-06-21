var Renderer = (function () {
  var module = {};

  module.renderStandings = function (standings, names) {
    Helpers.log(JSON.stringify(standings));
    printNames(names);
    gradually('bid0', 0);
    gradually('bid1', 0);
    gradually('coin0', standings.coins[0]);
    gradually('coin1', standings.coins[1]);
    renderTrophies(0, standings.trophies[0]);
    renderTrophies(1, standings.trophies[1]);
    renderWinner(standings.winner, names);
  }

  module.renderBid = function (player, bid) {
    simply('bid' + player, bid);
  }

  module.resetBids = function () {
    simply('bid0', "");
    simply('bid1', "");
  }

  function printNames(names) {
    Helpers.log(JSON.stringify(names));
    simply('name0', names[0]);
    simply('name1', names[1]);
  }

  function renderTrophies(playerId, amount) {
    var container = $('#trophies' + playerId);
    container.empty();
    for(var i = 0; i < amount; ++i) {
      var newTrophy = $('#trophy').clone();
      container.append(newTrophy);
      newTrophy.show();
    }
  }

  function renderWinner(winner, names) {
    var victoryContainer = $('#victory-alert');
    if(winner != undefined) {
      victoryContainer.text(names[winner] + " nyert!");
      victoryContainer.show();
    } else {
      victoryContainer.hide();
    }
  }

  function simply(element, text) {
    $('#' + element).text(text);
  }

  function gradually(element, target) {
    var numberElement = $('#' + element);
    var current = Number(numberElement.text());
    var step = (target - current) / 20;
    var interval = setInterval(() => {
      current += step;
      if (Math.sign(step) * current >= Math.sign(step) * target) {
          current = target;
          clearInterval(interval);
      }
      numberElement.text(current.toFixed(0));
    }, 25);
  }

  return module;
}());
