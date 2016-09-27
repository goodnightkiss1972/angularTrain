import ngRedux from 'ng-redux'
import Config from './config'

/**
 *  App Modules
 */
import MainContainer from './containers/main.container'
import HeaderContainer from './containers/header.container'
import ToyContainer from './containers/toy.container'
import ToyService from './services/toy.service'
import ToyComponent from './components/toy.component'
import ToyAction from './actions/toy.actions'

angular.module('ToyStore', [
  ngRedux
])
  .component('mainContainer', new MainContainer())
  .component('headerContainer', new HeaderContainer())
  .component('toyContainer', new ToyContainer())
  .component('toyComponent', new ToyComponent())
  .service('ToyService', ToyService)
  .service('ToyActions', ToyAction)
  .config(Config)

angular.bootstrap(document.documentElement, ['ToyStore'])
