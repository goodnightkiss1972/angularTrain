class ToyController {

  public toys
  private disconnect

  constructor(
    private $ngredux,
    private toyActions
  )   {
  }

  public $onInit = () => {
    this.disconnect = this.$ngredux.connect(this.mapStateToThis, () => {})(this)
    this.$ngredux.dispatch(this.toyActions.getToys())   
  }
  public $onDestroy = () => {
    this.disconnect()
  }

  public select = toy => {
    this.$ngredux.dispatch(this.toyActions.selectToy(toy))
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

ToyController.$inject = ['$ngRedux','ToyActions'] //plus besoin du service

export default ToyContainer
