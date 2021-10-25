import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { Height, Colors } from '../../utils';

const styles = StyleSheet.create({
  touch: {
    height: Height(5),
    width: Height(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14
  }
});

export const ButtonMore = ({ onPress, disabled }) => (
  <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.touch, { backgroundColor: !disabled ? Colors.green : Colors.gray }]}>
    {!disabled
      ? <Entypo name="plus" size={Height(3.1)} color={Colors.white} />
      : <MaterialIcons name="remove-shopping-cart" size={Height(3)} color={Colors.gray_light} />}
  </TouchableOpacity>
);
