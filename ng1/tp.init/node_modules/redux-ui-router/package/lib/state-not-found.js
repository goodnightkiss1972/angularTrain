'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = onStateNotFound;

var _actionTypes = require('./action-types');

/**
 * This action is triggered when a $stateNotFound event is broadcast.
 * Accepts a payload which matches the UI Router $stateNotFound event.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @param {Object} evt event details
 * @param {Object} unfoundState The unfound state definition
 * @param {Object} fromState From state definition
 * @param {Object} fromParams From params object
 * @return {Object} Action object
 */

function onStateNotFound(evt, unfoundState, fromState, fromParams) {
  return {
    type: _actionTypes.STATE_NOT_FOUND,
    payload: {
      evt: evt,
      unfoundState: unfoundState,
      fromState: fromState,
      fromParams: fromParams
    }
  };
}

module.exports = exports['default'];