class BasketController {
  public toys
  public total
  private disconnect

  constructor(
    private $ngRedux,
    private $state,
    private toyActions
  ) {}

  public $onInit = () => {
    this.disconnect = this.$ngRedux.connect(this.mapStateToThis, () => {})(this)
  }
  public $onDestroy = () => {
    this.disconnect()
  }

  public goToCheckout = () => {
    this.$state.go('checkout')
  }

  public delete = toy => {
    this.$ngRedux.dispatch(this.toyActions.selectToy(toy))
  }

  private mapStateToThis = state => {
    return {
      toys: state.toyReducer.toys.filter(item => {
        return item.selected
      }),
      total: state.toyReducer.total
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
BasketController.$inject = ['$ngRedux', '$state', 'ToyActions']
export default BasketContainer
