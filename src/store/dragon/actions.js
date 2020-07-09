import DragonService from '../../services/Dragon';

export const LOADING_DRAGONS = 'LOADING_DRAGONS';
export function loadingDragons() {
  return {
    type: LOADING_DRAGONS,
  };
}

export const SUCCESS_GET_DRAGONS = 'SUCCESS_GET_DRAGONS';
export function successGetDragons(list = []) {
  return {
    type: SUCCESS_GET_DRAGONS,
    payload: list,
  };
}

export const ERROR_GET_DRAGONS = 'ERROR_GET_DRAGONS';
export function errorGetDragons(error = '') {
  return {
    type: ERROR_GET_DRAGONS,
    error,
  };
}

export const getDragons = () => {
  return async dispatch => {
    dispatch(loadingDragons());
    try {
      const response = await new DragonService().getAll();

      if (!response.data) throw new Error({ message: 'Não foi possível localizar nenhuma loja' });
      dispatch(successGetDragons(response.data));
    } catch (error) {
      dispatch(errorGetDragons(error.message));
    }
  };
}
