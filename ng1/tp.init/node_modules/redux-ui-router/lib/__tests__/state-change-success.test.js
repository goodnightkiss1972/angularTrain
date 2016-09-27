'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('chai');

var _stateChangeSuccess = require('../state-change-success');

var _stateChangeSuccess2 = _interopRequireDefault(_stateChangeSuccess);

describe('stateChangeSuccess', function () {
  it('should create an action with the provided params', function () {
    var action = (0, _stateChangeSuccess2['default'])();
    expect(action.type).to.equal('@@reduxUiRouter/$stateChangeSuccess');
  });
});