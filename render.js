var h = require('mercury').h;

module.exports = function render(state) {
  return h('#app', [
    h('ul', [
      link('#/', 'home', state.route === 'home'),
      link('#/foo', 'foo', state.route === 'foo')
    ]),
    pages(state)
  ]);
};

function link(uri, text, isSelected) {
  return h('li', [
    h('a', { className: isSelected ? "selected" : "", href: uri }, text)
  ]);
}

function pages(state) {
  return (state.route === 'home') ? h('h1', 'Home') : h('h1', 'Foo');
}
