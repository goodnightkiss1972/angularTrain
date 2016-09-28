class ToyService {

  constructor(
    private $q,
    private $http
  ) {}

  public getToys = () => {

    const defer = this.$q.defer()

    this.$http.get('./mocks/toys.json')
      .success(resultat => {
        defer.resolve(resultat)
      })

    return defer.promise
  }

}

ToyService.$inject = ['$q', '$http']
export default ToyService
