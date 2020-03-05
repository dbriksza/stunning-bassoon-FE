import { combineReducers } from 'redux';

import auth from './auth'
import game from './game'

const appReducer = combineReducers({
    auth, game
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;