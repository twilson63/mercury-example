// module that is a collection of update functions that update the
// state when ever a bounded event occurs...
module.exports = Object.freeze({
  setRoute: function setRoute(state, route) {
    state.route.set(route.substr(2)  || 'home');
  }
});
