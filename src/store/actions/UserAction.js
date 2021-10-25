import * as types from './action-types';

export const editCPFPass = (cpf, pass) => (dispatch) => {
  dispatch({
    type: types.EDITCPFPASS,
    payload: {
      cpf,
      pass
    }
  });
};

export const editRemember = (rememberCPFPass) => (dispatch) => {
  dispatch({
    type: types.EDITREMEMBER,
    payload: {
      rememberCPFPass
    }
  });
};
