// Event Actions
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = stateChangeActions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stateChangeStart = require('./state-change-start');

var _stateChangeStart2 = _interopRequireDefault(_stateChangeStart);

var _stateChangeSuccess = require('./state-change-success');

var _stateChangeSuccess2 = _interopRequireDefault(_stateChangeSuccess);

var _stateChangeError = require('./state-change-error');

var _stateChangeError2 = _interopRequireDefault(_stateChangeError);

var _stateNotFound = require('./state-not-found');

var _stateNotFound2 = _interopRequireDefault(_stateNotFound);

var _redux = require('redux');

function stateChangeActions() {
  this.$get = function ($ngRedux) {
    var actionCreator = {
      onStateChangeStart: _stateChangeStart2['default'],
      onStateChangeSuccess: _stateChangeSuccess2['default'],
      onStateChangeError: _stateChangeError2['default'],
      onStateNotFound: _stateNotFound2['default']
    };

    return (0, _redux.bindActionCreators)(actionCreator, $ngRedux.dispatch);
  };

  this.$get.$inject = ['$ngRedux'];
}

module.exports = exports['default'];