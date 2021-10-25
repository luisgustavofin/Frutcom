import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Height, TextStyles, Colors } from '../../utils';

const styles = StyleSheet.create({
  touch: {
    height: Height(8.5),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.green,
    borderRadius: 30,
    marginTop: 40
  }
});

export const LoginButton = ({ onPress, txt }) => (
  <TouchableOpacity onPress={onPress} style={styles.touch}>
    <Text style={TextStyles.h5WhiteBold}>{txt}</Text>
  </TouchableOpacity>
);
