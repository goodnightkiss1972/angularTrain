'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = onStateChangeError;

var _actionTypes = require('./action-types');

/**
 * This action is triggered when a $stateChangeError event is broadcast.
 * Accepts a payload which matches the UI Router $stateChangeError event.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @param {Object} evt event details
 * @param {Object} toState To state definition
 * @param {Object} toParams To params object
 * @param {Object} fromState From state definition
 * @param {Object} fromParams From params object
 * @param {Object} err Error resolve object
 * @return {Object} Action object
 */

function onStateChangeError(evt, toState, toParams, fromState, fromParams, err) {
  return {
    type: _actionTypes.STATE_CHANGE_ERROR,
    payload: {
      evt: evt,
      toState: toState,
      toParams: toParams,
      fromState: fromState,
      fromParams: fromParams,
      err: err
    }
  };
}

module.exports = exports['default'];