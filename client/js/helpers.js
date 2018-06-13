var Helpers = (function () {
  var module = {};

  module.log = function(message) {
  	document.body.innerText = document.body.innerText + message + '\n';
  }

  return module;
}());
