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

export const CREATE_DRAGON = 'CREATE_DRAGON';
export function createDragonRequest(dragon) {
  return {
    type: CREATE_DRAGON,
    payload: dragon,
  };
}

export const CREATE_DRAGON_FAILURE = 'CREATE_DRAGON_FAILURE';
export function createDragonFailure(error = '') {
  return {
    type: CREATE_DRAGON_FAILURE,
    error,
  };
}

export const CREATE_DRAGON_SUCCESS = 'CREATE_DRAGON_SUCCESS';

export function createDragonSuccess(data) {
  return {
    type: CREATE_DRAGON_SUCCESS,
    payload: { data },
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

export const createDragon = (dragon) => {
  return async dispatch => {
    dispatch(createDragonRequest(dragon));
    try {
      const response = await new DragonService().newDragon(dragon);
      console.log(response);
      if (response.status !== 201) {
        dispatch(createDragonFailure('Invalid status code'));
        throw new Error('Invalid status code');
      }
      dispatch(createDragonSuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(createDragonFailure('Invalid status code'));
    }
  };
}
