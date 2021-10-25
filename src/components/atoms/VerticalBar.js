import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../utils';

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '0.3%',
    backgroundColor: Colors.gray_mid_light,
    marginTop: 10,
    marginBottom: 10
  }
});

export const VerticalBar = () => <View style={styles.view} />;
