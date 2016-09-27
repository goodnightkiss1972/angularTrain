class ToyController {

  public toys

  constructor(
    private toyService
  )   {
  }

  public $onInit = () => {
    this.toyService.getToys().then(resultat => {
      this.toys = resultat
    }) 
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

ToyController.$inject = ['ToyService'] //on declare l'injection de notre service

export default ToyContainer
