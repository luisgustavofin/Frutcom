import * as types from '../actions/action-types';

const INITIAL_STATE = {
  total: 0,
  listCart: []
};

const ListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EDITTOTAL:
      return { ...state, total: action.payload.total };
    case types.ADDLISTCART:
      return { ...state, listCart: action.payload.listCart };
    default:
      return state;
  }
};

export default ListReducer;
