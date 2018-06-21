var Helpers = (function () {
  var module = {};

  module.log = function(message) {
    var entry = $('<p>').text(message);
    $('#logger').append(entry);
  }

  return module;
}());
