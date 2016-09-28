class ToyController {

  public toys

  constructor(
    private $ngRedux,
    private toyActions
  ) {}

  public $onInit = () => {
    this.$ngRedux.connect(this.mapStateToThis, () => {})(this)
    this.$ngRedux.dispatch(this.toyActions.getToys())
  }
  public select = toy => {
    this.$ngRedux.dispatch(this.toyActions.selectToy(toy))
  }

  private mapStateToThis = state => {
    return {
      toys: state.toyReducer.toys
    }
  }
}

class ToyContainer {
  public controller
  public templateUrl
  constructor() {
    this.controller = ToyController
    this.templateUrl = './js/containers/toy.html'
  }
}

ToyController.$inject = ['$ngRedux', 'ToyActions']
export default ToyContainer
