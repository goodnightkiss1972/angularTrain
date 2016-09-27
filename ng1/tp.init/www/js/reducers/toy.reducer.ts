import { TOY } from '../actions/toy.actions'
import { clone } from '../helpers/helpers'

function toyReducer(state= {}, action) {

    let newState

    switch(action.type) {
        case TOY.SELECTED:
            newState = clone(state)
            
            const toys = newState.toys.map(item => {
                item.selected = item.title === action.payload.title ?
                !item.selected : item.selected
                return item
            })

            const count = newState.toys.filter(item => {
                return item.selected
            }).length

            return Object.assign(newState, {toys}, {count})
        
        case TOY.RESPONSE:
            newState = clone(state)
            return Object.assign(newState, {toys: action.toys})

        default:
            return state
    }

}

export default toyReducer