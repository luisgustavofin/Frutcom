import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Height, Width, Colors, Labels } from '../../utils';
import { SecondaryText, OrganicText, ButtonMore } from '../atoms';
import { Banana, Pear, Pineapple, Apple, Mango } from '../../assets/svgs';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: Width(45),
    height: Height(25),
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 6,
    marginRight: 6,
    shadowColor: Colors.gray_dark,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  box: {
    height: '95%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 25
  },
  button: {
    position: 'absolute',
    bottom: 8,
    right: 8
  },
  mLeft: {
    marginLeft: 12
  }
});

export const CarouselList = ({
  data,
  onPressMore,
  listFruit,
  disabled
}) => (
  <>
    { !data.price
      ? <ActivityIndicator color={Colors.green} size="large" />
      : (
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.mLeft}>
              {data.fruit === 'Banana' && <Banana width={Height(12)} height={Height(12)} />}
              {data.fruit === 'Maçã' && <Apple width={Height(12)} height={Height(12)} />}
              {data.fruit === 'Pera' && <Pear width={Height(12)} height={Height(12)} />}
              {data.fruit === 'Abacaxi' && <Pineapple width={Height(12)} height={Height(12)} />}
              {data.fruit === 'Manga' && <Mango width={Height(12)} height={Height(12)} />}
            </View>
            <View style={{ marginTop: -15, zIndex: 9 }}>
              <SecondaryText txt={data.fruit} />
              <OrganicText txt={Labels.organic} />
            </View>
            <View style={{ marginTop: -20 }} />
            <SecondaryText txt={`R$${data.price}`} />
          </View>
          <View style={styles.button}>
            <ButtonMore disabled={disabled} listFruit={listFruit} onPress={onPressMore} />
          </View>
        </View>
      )}
  </>
);
