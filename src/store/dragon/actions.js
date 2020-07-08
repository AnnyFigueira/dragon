import DragonService from '../../services/Dragon';
import { useApiRequest } from '../../utils/hooks';

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
      const [isLoaded, response, error] = useApiRequest({Service: DragonService, action: 'getAll'}, null, 'Failed to fetch data', false)
      if (error) throw new Error({ message: 'Não foi possível buscar os dragões' });
      if (isLoaded) dispatch(successGetDragons(response.data));
    } catch (error) {
      dispatch(errorGetDragons(error.message));
    }
  };
}
