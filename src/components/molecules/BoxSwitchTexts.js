import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RememberText, GenericSwitch } from '../atoms';
import { Labels } from '../../utils';

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mLeft: {
    marginLeft: 8
  }
});

export const BoxSwitchTexts = ({ switchValue, changeSwitch }) => (
  <View style={styles.box}>
    <GenericSwitch
      switchValue={switchValue}
      changeSwitch={changeSwitch}
    />
    <View style={styles.mLeft} />
    <RememberText txt={Labels.lembrarMe} />
  </View>
);
