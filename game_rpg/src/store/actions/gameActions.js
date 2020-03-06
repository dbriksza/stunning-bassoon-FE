import { axiosWithAuth } from "../axiosWithAuth";

export const GET_BOARD_START = "GET_BOARD_START";
export const GET_BOARD_SUCCESS = "GET_BOARD_SUCCESS";

export const GAME_FAIL = "GAME_ERROR";

export const MOVE_PLAYER = "MOVE_PLAYER";

export const updateAction = (type, payload, roomTitle, playerPosition) => ({
  type,
  payload,
  roomTitle,
  playerPosition
});

export const getGame = () => dispatch => {
  dispatch({ type: GET_BOARD_START });
  axiosWithAuth()
    .get(`/get_game`)
    .then(res => {
      dispatch({ type: GET_BOARD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GAME_FAIL, payload: err });
    });
};

export const movePlayer = (board, playerPosition, direction) => dispatch => {
  const reqBody = { direction: direction };
  //need tobe synced with backend
  axiosWithAuth()
    .post(`/api/adv/move`, reqBody)
    .then(response => {
      dispatch(
        updateAction(MOVE_PLAYER, board, response.title, playerPosition)
      );
    })
    .catch(err => {
      console.log(err);
    });
};
