import { createContext } from 'react';

const Store = createContext();

export default Store;

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        logged: true
      };
    case 'LOGOUT':
      return {
        ...state,
        logged: false
      };
    case 'INDEX_DRAGONS': 
      return {
        ...state, 
        dragons: [...action.dragons]
      };
    case 'CREATE_DRAGON': 
      return {
        ...state, 
        dragons: [...state.dragons, action.dragon]
      };
    case 'UPDATE_DRAGON': 
      return {
        ...state,
        dragons: state.dragons.map((dragon) => dragon.id == action.dragon.id ? action.dragon : dragon)
      };
    case 'DESTROY_DRAGON': 
      return {
        ...state,
        dragons: state.dragons.filter((dragon) => dragon.id != action.dragon.id)
      };
    default:
      return state;
  }
}

export const initialState = {
  dragons: [],
  logged: localStorage['logged'] == 'true'
}