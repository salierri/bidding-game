var Renderer = (function () {
  var module = {};

  module.render = function (standings) {
    Helpers.log(JSON.stringify(standings));
  }

  return module;
}());
