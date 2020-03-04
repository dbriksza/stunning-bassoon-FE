import * as types from '../actions/authActions';

const initialState = {
    registerError: null,
    loginError: null,
    loadingUser: false,
}

function authReducer(state = initialState, action) {
    switch(action.type) {
        case (types.LOGIN):
            return state
        default:
            return state;
    }
}

export default authReducer