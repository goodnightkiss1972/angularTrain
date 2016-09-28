class ToyComponent {
  public bindings
  public templateUrl
  constructor() {
    this.bindings = {
      toy: '<',
      onSelect: '&'
    }
    this.templateUrl = './js/components/toy.component.html'
  }
}

export default ToyComponent
