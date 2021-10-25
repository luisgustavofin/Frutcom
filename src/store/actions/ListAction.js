import * as types from './action-types';

export const editTotal = (total) => (dispatch) => {
  dispatch({
    type: types.EDITTOTAL,
    payload: {
      total
    }
  });
};

export const addListCart = (listCart = []) => (dispatch) => {
  dispatch({
    type: types.ADDLISTCART,
    payload: {
      listCart
    }
  });
};
