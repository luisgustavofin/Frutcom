import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TopOfferText, BottomOfferText } from '../atoms';
import { Labels } from '../../utils';

const styles = StyleSheet.create({
  box: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '75%'
  }
});

export const BoxTexts = () => (
  <View style={styles.box}>
    <TopOfferText txt={Labels.obtenhaAte} />
    <BottomOfferText txt={Labels.dezOff} />
  </View>
);
