class HeaderController {
  public count
  private disconnect
  
  constructor(
    private $ngRedux
  ) { }

  public $onInit = () => {
    this.disconnect = this.$ngRedux.connect(this.mapStateToThis, () => { })(this)
  }
  public $onDestroy = () => {
    this.disconnect()
  }
  private mapStateToThis = state => {
    return {
      count: state.toyReducer.count
    }
  }
}

class HeaderContainer {
  public controller
  public templateUrl
  constructor() {
    this.controller = HeaderController
    this.templateUrl = './js/containers/header.html'
  }
}

HeaderController.$inject = ['$ngRedux']

export default HeaderContainer
