import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { ChildrenButton } from '../atoms';
import { Height, Colors } from '../../utils';

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mLeft: {
    marginLeft: 20
  }
});

export const BoxTwoSVGS = ({ onPressCart, onPressLogout }) => (
  <View style={styles.box}>
    <ChildrenButton onPress={onPressCart}>
      <Feather name="shopping-cart" size={Height(3.5)} color={Colors.gray_dark} />
    </ChildrenButton>
    <View style={styles.mLeft} />
    <ChildrenButton onPress={onPressLogout}>
      <MaterialIcons name="logout" size={Height(3.5)} color={Colors.gray_dark} />
    </ChildrenButton>
  </View>
);
