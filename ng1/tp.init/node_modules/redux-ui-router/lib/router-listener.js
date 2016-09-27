/**
 * Listens for events emitted from Angular UI Router and fires redux events
 *
 * @param {object} $rootScope Dependency
 * @param {object} $urlRouter Dependency
 * @param {object} $stateParams Dependency
 * @param {object} ngUiStateChangeActions Dependency
 * @return {undefined} undefined
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = RouterListener;

function RouterListener($rootScope, $urlRouter, $stateParams, ngUiStateChangeActions) {
  $rootScope.$on('$stateChangeStart', ngUiStateChangeActions.onStateChangeStart);

  $rootScope.$on('$stateChangeSuccess', function () {
    ngUiStateChangeActions.onStateChangeSuccess();
  });

  var unsubcribeStateChangeListener = $rootScope.$on('$locationChangeSuccess', function () {
    ngUiStateChangeActions.onStateChangeSuccess();
    unsubcribeStateChangeListener();
  });

  $rootScope.$on('$stateChangeError', ngUiStateChangeActions.onStateChangeError);
  $rootScope.$on('$stateNotFound', ngUiStateChangeActions.onStateNotFound);
}

RouterListener.$inject = ['$rootScope', '$urlRouter', '$stateParams', 'ngUiStateChangeActions'];
module.exports = exports['default'];