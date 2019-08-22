(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var EVENTS = {
    mouseover: 'MouseOver',
    mouseout: 'MouseOut',
    mouseenter: 'MouseEnter',
    mouseleave: 'MouseLeave'
  };

  var NxReactEventMap = nx.declare('nx.ReactEventMap', {
    statics: {
      get: function(inName) {
        return EVENTS[inName];
      },
      gets: function() {
        return EVENTS;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxReactEventMap;
  }
})();
