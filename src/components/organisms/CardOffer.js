import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BoxTexts } from '../molecules';
import { Height, Width, Colors } from '../../utils';
import { PearOffer } from '../../assets/svgs';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green_light,
    width: '100%',
    height: Height(15),
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20
  },
  texts: {
    marginLeft: 25,
    justifyContent: 'center'
  },
  svg: {
    position: 'absolute',
    bottom: 0,
    right: 10
  }
});

export const CardOffer = () => (
  <View style={styles.container}>
    <View style={styles.texts}>
      <BoxTexts />
    </View>
    <View style={styles.svg}>
      <PearOffer width={Width(33)} height={Height(13)} />
    </View>
  </View>
);
