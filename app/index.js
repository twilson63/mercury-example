var mecury = require('mercury');
var h = mecury.h;

var Input = require('./input');
var State = require('./state');
var Render = require('./render');
var Update = require('./update');

module.exports = createApp;

var state = createApp();
mecury.app(document.body, state, Render);

// create App
function createApp() {
  var events = Input();
  var state = State.app(events, { route: 'home' });
  // wire up events
  events.setRoute(Update.setRoute.bind(null, state));
  return state;
}

