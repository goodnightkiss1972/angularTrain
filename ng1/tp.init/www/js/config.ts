import rootReducer from './reducers/index'
import * as createLogger from 'redux-logger'
import thunk from 'redux-thunk'

class Config {
    constructor(
        $ngReduxProvider
    ) {
        $ngReduxProvider.createStoreWith(
            rootReducer, 
            [thunk, createLogger()]
        )
    }
}

Config.$inject = ['$ngReduxProvider']
export default Config