import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import { LoginTemplate } from '../components/templates';
import { editRemember, editCPFPass } from '../store/actions';
import { Labels, maskCPF, unmask } from '../utils';

const LoginScreen = (props) => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'TabNavigator' })]
  });
  const [cpfAux, setCpf] = useState(props.rememberCPFPass ? props.cpf : '');
  const [passAux, setPass] = useState(props.rememberCPFPass ? props.pass : '');
  const [error, setError] = useState('');

  useEffect(() => {
    if (props.rememberCPFPass) {
      props.editCPFPass(unmask(cpfAux), passAux);
    }
  }, [cpfAux, passAux]);

  const tryLogin = async () => {
    Keyboard.dismiss();
    setError('');
    if (!props.rememberCPFPass) {
      props.editCPFPass('', '');
    }

    if (unmask(cpfAux) === '' || passAux === '') setError(Labels.preenchaOsCampos);
    else if (unmask(cpfAux) === '00000000000' && passAux === '12345') {
      props.editCPFPass(cpfAux, passAux);
      props.navigation.dispatch(resetAction);
    }
    else setError(Labels.erroUsuario);
  };

  return (
    <LoginTemplate
      onPressLogin={() => tryLogin()}
      switchValue={props.rememberCPFPass}
      changeSwitch={() => props.editRemember(!props.rememberCPFPass)}
      valueCPF={maskCPF(cpfAux)}
      ChangeCPF={(c) => setCpf(c)}
      valuePass={passAux}
      ChangePass={(p) => setPass(p)}
      error={error}
    />
  );
};

const mapStateToProps = ({ UserReducer }) => {
  const { rememberCPFPass, cpf, pass } = UserReducer;
  return {
    rememberCPFPass,
    cpf,
    pass
  };
};

export default connect(mapStateToProps, {
  editRemember,
  editCPFPass
})(LoginScreen);
