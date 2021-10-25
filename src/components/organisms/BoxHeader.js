import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Labels } from '../../utils';
import { PrincipalText } from '../atoms';
import { BoxTwoSVGS } from '../molecules';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export const BoxHeader = ({ onPressCart, onPressLogout }) => (
  <View style={styles.container}>
    <PrincipalText txt={Labels.frutcom} />
    <BoxTwoSVGS onPressCart={onPressCart} onPressLogout={onPressLogout} />
  </View>
);
