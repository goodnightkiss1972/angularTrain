export const TOY = {
  SELECTED: 'TOY_SELECTED',
  RESPONSE: 'TOY_RESPONSE'
}

class ToyActions {
  constructor(
    private $state,
    private toyService
  ) {}

  public selectToy = toy => {
    return (dispatch, getState) => {
      dispatch({
        type: TOY.SELECTED,
        payload: toy
      })
      const state = getState()
      if (!state.toyReducer.total) {
        this.$state.go('toys')
      }
    }
  }

  public getToys = () => {
   return (dispatch, getState) => {
     const toys = getState()
     if (toys.toyReducer.toys && toys.toyReducer.toys.length) { return }

     this.toyService.getToys().then(resultat => {
       dispatch({
         type: TOY.RESPONSE,
         toys: resultat
       })
     }) 

   } 
  }
}

ToyActions.$inject = ['$state', 'ToyService']
export default ToyActions
