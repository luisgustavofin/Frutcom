import * as types from '../actions/action-types';

const INITIAL_STATE = {
  cpf: '',
  pass: '',
  rememberCPFPass: false
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EDITCPFPASS:
      return { ...state, cpf: action.payload.cpf, pass: action.payload.pass };
    case types.EDITREMEMBER:
      return { ...state, rememberCPFPass: action.payload.rememberCPFPass };
    default:
      return state;
  }
};

export default UserReducer;
