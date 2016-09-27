'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('chai');

var _stateNotFound = require('../state-not-found');

var _stateNotFound2 = _interopRequireDefault(_stateNotFound);

describe('stateNotFound', function () {
  it('should create an action with the provided params', function () {
    var action = (0, _stateNotFound2['default'])('evt', 'unfoundState', 'fromState', 'fromParams');

    expect(action.payload.evt).to.equal('evt');
    expect(action.payload.unfoundState).to.equal('unfoundState');
    expect(action.payload.fromState).to.equal('fromState');
    expect(action.payload.fromParams).to.equal('fromParams');
    expect(action.type).to.equal('@@reduxUiRouter/$stateNotFound');
  });
});