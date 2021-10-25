import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LogoText, LogoSecondaryText } from '../atoms';
import { Labels, Height } from '../../utils';
import { Logo } from '../../assets/svgs';

const styles = StyleSheet.create({
  box: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  mTop: {
    marginTop: 5
  }
});

export const LogoTexts = () => (
  <View style={styles.box}>
    <Logo width={Height(13)} height={Height(13)} />
    <LogoText txt={Labels.frutcom} />
    <View style={styles.mTop} />
    <LogoSecondaryText txt={Labels.frutasFrescas} />
  </View>
);
