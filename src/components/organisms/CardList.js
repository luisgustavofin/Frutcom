import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Height, Colors, Width } from '../../utils';
import { ChildrenButton, PriceText } from '../atoms';
import { BoxTextsKilo } from '../molecules';
import { Banana, Apple, Pineapple, Pear, Mango } from '../../assets/svgs';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Width(85),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    height: Height(15),
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: Colors.gray_dark,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 10
  },
  box: {
    height: '90%',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  boxRight: {
    height: '100%',
    width: '30%',
    alignItems: 'flex-end',
    zIndex: -1
  },
  boxLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%'
  },
  priceText: {
    position: 'absolute',
    bottom: 7,
    right: 0
  }
});

export const CardList = ({ onPressDelete, data }) => (
  <View style={styles.container}>
    <View style={styles.box}>
      <View style={styles.boxLeft}>
        {data.fruit === 'Banana' && <Banana width={Height(8)} height={Height(8)} />}
        {data.fruit === 'Maçã' && <Apple width={Height(8)} height={Height(8)} />}
        {data.fruit === 'Pera' && <Pear width={Height(8)} height={Height(8)} />}
        {data.fruit === 'Abacaxi' && <Pineapple width={Height(8)} height={Height(8)} />}
        {data.fruit === 'Manga' && <Mango width={Height(8)} height={Height(8)} />}
        <BoxTextsKilo txt={data.fruit || '-'} />
      </View>
      <View style={styles.boxRight}>
        <ChildrenButton onPress={onPressDelete}>
          <Ionicons name="close" size={Height(4)} color={Colors.gray_mid_light} />
        </ChildrenButton>
        <View style={styles.priceText}>
          <PriceText txt={data.price ? `R$${data.price}` : '-'} />
        </View>
      </View>
    </View>
  </View>
);
