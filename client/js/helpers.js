var Helpers = (function () {
  var module = {};

  module.log = function(message) {
    var entry = $('<p>');
    entry.addClass('log-entry');
    entry.text(message);
    var container = $('#logger');
    container.append(entry);
    container.scrollTop(container.prop('scrollHeight'));
  }

  return module;
}());
