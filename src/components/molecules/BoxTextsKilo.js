import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SecondaryText, AbstractText } from '../atoms';
import { RectangleKilo } from './RectangleKilo';
import { Labels } from '../../utils';

const styles = StyleSheet.create({
  box: {
    flexDirection: 'column',
    marginLeft: 15,
    marginTop: -20
  }
});

export const BoxTextsKilo = ({ txt }) => (
  <View style={styles.box}>
    <View>
      <SecondaryText txt={txt} />
      <AbstractText txt={Labels.organic} />
    </View>
    <RectangleKilo />
  </View>
);
