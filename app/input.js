var HashRouter = require('hash-router');
var Event = require('geval');

// -----  Input Section -----
module.exports = function createInput() {
  var events = {
    setRoute: EventRouter()
  };
  return events;
};

function EventRouter() {
  var router = HashRouter();
  window.addEventListener('hashchange', router);
  return Event(function (emit) {
    router.on('hash', emit);
  });
}


