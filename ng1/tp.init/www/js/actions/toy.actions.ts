export const TOY = {
SELECTED: 'TOY_SELECTED',
RESPONSE: 'TOY_RESPONSE'
}
// constante représentant chaque action

class ToyActions {
    constructor(private toyService) {}

    public selectToy = toy => {
        return {
            type: TOY.SELECTED,
            payload: toy
        }
    }

    public getToys = () => {
        return dispatch => {
            this.toyService.getToys().then(resultat => {
                dispatch({
                    type: TOY.RESPONSE,
                    toys: resultat
                })
            })
        }
    }
}

ToyActions.$inject = ['ToyService']
export default ToyActions