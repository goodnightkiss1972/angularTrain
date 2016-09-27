/**
 *  App Modules
 */
import MainContainer from './containers/main.container'
import HeaderContainer from './containers/header.container'
import ToyContainer from './containers/toy.container'
import ToyService from './services/toy.service'
import ToyComponent from './components/toy.component'

angular.module('ToyStore', [])
  .component('mainContainer', new MainContainer())
  .component('headerContainer', new HeaderContainer())
  .component('toyContainer', new ToyContainer())
  .component('toyComponent', new ToyComponent())
  .service('ToyService', ToyService)


angular.bootstrap(document.documentElement, ['ToyStore'])
