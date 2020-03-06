import * as types from '../actions/gameActions';

// Shape of initial server data:
// player_dict = {
//   "current_player": current_player,
//   "players": [{
//       "player_id": p.id,
//       "username": p.user.username,
//       "score": p.points,
//       "current_room": p.currentRoom,
//   } for p in Player.objects.all()]
// }
// board = [{
//   "room_id": r.id,
//   "x_coord": r.x_coord,
//   "y_coord": r.y_coord,
//   "players": [p.id for p in Player.objects.filter(currentRoom=r.id)],
//   "point_value": r.points
// } for r in Room.objects.all()]

// Shape of server data updates
// player_updates = {
//   "current_player": current_player,
//   "player": {
//       "player_id": player.id,
//       "username": player.user.username,
//       "points": player.points,
//       "current_room": player.currentRoom,
//       "isTurn": player.user.username == current_player,
//       "movePoints": player.moves
//   }
// }
// board_updates = {
//   "oldRoom": {
//       "room_id": room.id,
//       "players": [p.id for p in Player.objects.filter(currentRoom=room.id)],
//       "points": room.points
//   },
//   "newRoom": {
//       "room_id": nextRoom.id,
//       "players": [p.id for p in Player.objects.filter(currentRoom=nextRoom.id)],
//       "points": nextRoom.points
//   }

const initialState = {
  board: {
    blueprint: null,
    rooms: {}
  },
  players: [],
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