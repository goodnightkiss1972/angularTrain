class CheckoutController {
  public count
  private disconnect

  constructor(
    private $ngRedux
  ) {}

  public $onInit = () => {
    this.disconnect = this.$ngRedux.connect(this.mapStateToThis, () => {})(this)
  }
  public $onDestroy = () => {
    this.disconnect()
  }
  private mapStateToThis = state => {
    return {
      
    }
  }
}

class CheckoutContainer {
  public controller
  public templateUrl
  constructor() {
    this.controller = CheckoutController
    this.templateUrl = './js/containers/checkout.html'
  }
}
CheckoutController.$inject = ['$ngRedux']
export default CheckoutContainer
