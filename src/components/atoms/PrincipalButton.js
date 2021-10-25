import React from 'react';
import {
  TouchableOpacity,
  Text, StyleSheet,
  ActivityIndicator,
  Platform
} from 'react-native';
import { Height, TextStyles, Colors } from '../../utils';

const styles = StyleSheet.create({
  touch: {
    height: Height(6.5),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.green,
    borderRadius: 14,
    marginTop: Platform.OS === 'android' ? 0 : 10,
    marginBottom: 16
  }
});

export const PrincipalButton = ({ onPress, txt, loading }) => (
  <TouchableOpacity onPress={onPress} style={styles.touch}>
    {loading ? <ActivityIndicator color={Colors.white} size="large" /> : <Text style={TextStyles.h6WhiteBold}>{txt}</Text>}
  </TouchableOpacity>
);
