import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Colors, Height, Labels, Width } from '../../utils';
import {
  SecondaryTitleText,
  AbstractText,
  LoginButton,
  InputLogin,
  ErrorMessage
} from '../atoms';
import { LogoTexts, BoxSwitchTexts } from '../molecules';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center'
  },
  box: {
    marginTop: Platform.OS === 'android' ? 20 : 35,
    width: Width(100),
    height: Height(Platform.OS === 'android' ? 85 : 80),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  marginInput: {
    marginTop: 15,
    marginBottom: 13
  },
  secondBox: {
    width: Width(90)
  }
});

export const LoginTemplate = ({
  onPressLogin,
  switchValue,
  changeSwitch,
  valueCPF,
  ChangeCPF,
  valuePass,
  ChangePass,
  error
}) => (
  <View style={styles.container}>
    <View style={styles.box}>
      <LogoTexts />
      <View style={styles.secondBox}>
        <SecondaryTitleText margin txt={Labels.sejaBem} />
        <AbstractText txt={Labels.facilidadePara} />
        <View style={styles.marginInput}>
          <InputLogin
            keyboardType="numeric"
            iconLeft={<AntDesign name="user" size={Height(3.5)} color={Colors.gray_dark} />}
            label={Labels.cpf}
            value={valueCPF}
            maxLength={14}
            numberOfLines={1}
            autoCorrect={false}
            autoCompleteType="off"
            onChangeText={ChangeCPF}
            placeholder={Labels.cpf}
          />
          <InputLogin
            secure
            label={Labels.senha}
            value={valuePass}
            numberOfLines={1}
            autoCorrect={false}
            autoCompleteType="off"
            placeholder={Labels.senha}
            onChangeText={ChangePass}
            valueItem="password"
            maxLength={45}
            iconLeft={<Feather name="lock" size={Height(3.5)} color={Colors.gray_dark} />}
          />
        </View>
        {error.length > 0 ? <ErrorMessage txt={error} /> : null}
        <BoxSwitchTexts
          switchValue={switchValue}
          changeSwitch={changeSwitch}
        />
        <LoginButton onPress={onPressLogin} txt={Labels.login} />
      </View>
    </View>
  </View>
);
