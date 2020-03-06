import * as types from "../actions/gameActions";

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
  gameData: {
    blueprint: null,
    board: []
  },
  playerData: {},
  isLoading: false,
  isSuccessful: false,
  isError: false,
  errorMessage: null
}



function gameReducer(state = initialState, action) {
  switch(action.type) {
    // generic HTTP request start handlers
    case (types.START_REQUEST):
      return {
        ...state,
        isLoading: true,
        isSuccessful: false,
        isError: false,
        errorMessage: null
      }

    // Get blueprint (may be deprecated)
    case (types.GET_BOARD_SUCCESS):
      return {
        ...state,
        gameData: {
          ...state.board,
          blueprint: action.payload.blueprint
        },
        isLoading: false,
        isSuccessful: true,
        isError: false,
        errorMessage: null
      }

    // PLAYER JOIN/LEAVE ACTION HANDLERS
    // join http handler
    case (types.JOIN_GAME_SUCCESS):
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        isError: false,
        errorMessage: null
      }
    // leave endpoint handler 
    case(types.LEAVE_GAME_SUCCESS):
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        isError: false,
        errorMessage: null
      }
    // pusher handler for player array updates
    case (types.PUSH_PLAYER_CHANGE):
      return {
        ...state,
        playerData: {
          ...state.playerData,
          players: action.payload.players
        }
      }
    
    // START GAME ACTION HANDLERS
    // http start game endpoint handlers
    case(types.START_GAME_SUCCESS):
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        isError: false,
        errorMessage: null
      }
    // pusher player channel start game
    case(types.PLAYER_START_GAME):
      return {
        ...state,
        playerData: {
          ...state.playerData,
          current_player: action.payload.current_player,
          players: action.payload.players
        }
      }
    // pusher board channel start game
    case(types.BOARD_START_GAME):
      return {
        ...state,
        gameData: {
          ...state.gameData,
          board: action.payload
        }
      }
    
    // GAME UPDATE ACTION HANDLERS
    // http roll die
    // roll die update causes pusher update to players_channel
    case(types.ROLL_DIE_SUCCESS):
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        isError: false,
        errorMessage: null
      }
    // http move player
    // Move player endpoint causes pusher update to players_channel and board_channel
    case(types.MOVE_PLAYER_SUCCESS):
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        isError: false,
        errorMessage: null
      }
    // pusher update gameboard
    case(types.PUSH_BOARD_CHANGE):
      return {
        ...state,
        gameData: {
          ...state.gameData,
          board: action.payload
        }
      }


    // generic http failure handler for error message  
    case (types.GAME_FAIL):
      return {
        ...state,
        isLoading: false,
        isSuccessful: false,
        isError: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}

export default gameReducer;
