class BasketController {
  public count
  private disconnect
  
  constructor(
    private $ngRedux,
    private $state
  ) { }

  public $onInit = () => {
    this.disconnect = this.$ngRedux.connect(this.mapStateToThis, () => { })(this)
  }
  public $onDestroy = () => {
    this.disconnect()
  }
  public goToCheckout = () => {
      this.$state.go('checkout')
  }
  private mapStateToThis = state => {
    return {

    }
  }
}

class BasketContainer {
  public controller
  public templateUrl
  constructor() {
    this.controller = BasketController
    this.templateUrl = './js/containers/basket.html'
  }
}

BasketController.$inject = ['$ngRedux', '$state']

export default BasketContainer
