'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('chai');

var _stateChangeStart = require('../state-change-start');

var _stateChangeStart2 = _interopRequireDefault(_stateChangeStart);

describe('stateChangeStart', function () {
  it('should create an action with the provided params', function () {
    var action = (0, _stateChangeStart2['default'])('evt', 'toState', 'toParams', 'fromState', 'fromParams');

    expect(action.payload.toState).to.equal('toState');
    expect(action.payload.toParams).to.equal('toParams');
    expect(action.payload.fromState).to.equal('fromState');
    expect(action.payload.fromParams).to.equal('fromParams');
    expect(action.payload.evt).to.equal('evt');
    expect(action.type).to.equal('@@reduxUiRouter/$stateChangeStart');
  });
});