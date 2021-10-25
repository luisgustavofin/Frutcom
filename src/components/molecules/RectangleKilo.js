import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Height, Labels, TextStyles, Colors } from '../../utils';

const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.gray_light,
    width: Height(8),
    height: Height(5.5),
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 13
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const RectangleKilo = () => (
  <View style={styles.box}>
    <View style={styles.text}>
      <Text style={TextStyles.h6Gray700}>{Labels.umKg}</Text>
    </View>
  </View>
);
