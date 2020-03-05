import * as types from '../actions/gameActions';

const initialState = {
    board: null,
    isLoading: false,
    isSuccessful: false,
    isError: false,
    errorMessage: null
}

function gameReducer(state = initialState, action) {
    switch(action.type) {
        case (types.GET_BOARD_START):
            return {
              isLoading: true,
              isSuccessful: false,
              isError: false,
              errorMessage: null
            }
        case (types.GET_BOARD_SUCCESS):
            return {
              board: action.payload.blueprint,
              isLoading: false,
              isSuccessful: true,
              isError: false,
              errorMessage: null
            }
        case (types.GAME_FAIL):
            return {
              isLoading: false,
              isSuccessful: false,
              isError: true,
              errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default gameReducer