(function() {
  var nx = require('next-js-core2');
  var NxReactEventMap = require('../src/next-react-event-map');

  describe('NxReactEventMap.methods', function() {
    test('mouseevents - get', function() {
      expect(NxReactEventMap.get('mouseover')).toBe('MouseOver');
      expect(NxReactEventMap.get('mouseout')).toBe('MouseOut');
    });
  });
})();
