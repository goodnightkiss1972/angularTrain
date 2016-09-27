'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = routerStateReducer;

var _actionTypes = require('./action-types');

var INITIAL_STATE = {
  currentState: {},
  currentParams: {},
  prevState: {},
  prevParams: {}
};

/**
 * Reducer of STATE_CHANGE_SUCCESS actions. Returns a state object
 * with { currentState, currentParams, prevState, prevParams }
 *
 * @param  {Object} state - Previous state
 * @param  {Object} action - Action
 * @return {Object} New state
 */

function routerStateReducer(state, action) {
  if (state === undefined) state = INITIAL_STATE;

  if (action.type !== _actionTypes.STATE_CHANGE_SUCCESS) {
    return state;
  }
  delete action.payload.evt;
  return action.payload;
}

module.exports = exports['default'];