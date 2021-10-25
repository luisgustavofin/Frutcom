import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Labels, Height, Width } from '../../utils';
import { PrincipalButton, NoItemTitleText, NoItemAbstractText } from '../atoms';
import { Cart } from '../../assets/svgs';

const styles = StyleSheet.create({
  container: {
    height: '75%',
    width: '90%',
    justifyContent: 'space-between',
    marginTop: 30
  },
  box: {
    height: '55%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  secondBox: {
    width: '100%',
    alignItems: 'center'
  },
  center: {
    alignItems: 'center'
  }
});

export const NoItem = ({ onPressNoItem }) => (
  <View style={styles.container}>
    <View style={styles.box}>
      <Cart width={Width(40)} height={Height(28)} />
      <View style={styles.center}>
        <NoItemTitleText txt={Labels.nenhumItem} />
        <NoItemAbstractText txt={Labels.voceNaoPossui} />
      </View>
    </View>
    <View style={styles.secondBox}>
      <PrincipalButton onPress={onPressNoItem} txt={Labels.adicionarFrutas} />
    </View>
  </View>
);
