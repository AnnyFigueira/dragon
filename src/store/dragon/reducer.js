import { LOADING_DRAGONS, SUCCESS_GET_DRAGONS, ERROR_GET_DRAGONS, CREATE_DRAGON_SUCCESS} from './actions';

const initialState = {
  dragonList: [],
  isLoadingDragons: false,
  newDragon: {},
}

export default function dragons(state=initialState, action) {
  switch(action.type) {
    case LOADING_DRAGONS:
      return {
        ...state,
        isLoadingDragons: true,
      };
    case SUCCESS_GET_DRAGONS:
      return {
        ...state,
        isLoadingDragons: false,
        dragonList: action.payload,
      }
    case ERROR_GET_DRAGONS:
      return {
        ...state,
        dragonList: [],
        error: action.error,
        isLoadingDragons: false,
      };
    case CREATE_DRAGON_SUCCESS:
      return {
        ...state,
        newDragon: action.payload,
      }
    default: return state;
  }
}