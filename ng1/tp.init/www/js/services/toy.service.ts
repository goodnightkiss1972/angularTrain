class ToyService {

    constructor(
        private $q, // doit correspondre en ordre et nom à l'injection
        private $http

    )   {}

    public getToys = () => {
        const defer = this.$q.defer() // creation de la promise

        this.$http.get('./mocks/toys.json') // recuperation des données
            .success(resultat => {
                defer.resolve(resultat)
            })
            .error((resultat, status) => {
                console.log ('FATAL ERROR = ', status, resultat)
            })

        return defer.promise
    }

}


ToyService.$inject = ['$q', '$http'] //prepare l'injection de ce dont on a besoin

export default ToyService