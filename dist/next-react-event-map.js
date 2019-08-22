/*!
 * name: next-react-event-map
 * url: https://github.com/afeiship/next-react-event-map
 * version: 1.0.0
 * date: 2019-08-22T12:47:05.119Z
 * license: MIT
 */

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

//# sourceMappingURL=next-react-event-map.js.map
