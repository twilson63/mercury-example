var mercury = require('mercury');

module.exports = {
  app: function(events, initialState) {
    var state = initialState;
    return mercury.struct({
      route: mercury.value(state.route),
      events: events
    });
  }
};
