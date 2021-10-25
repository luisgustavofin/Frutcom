import React from 'react';
import { View, StyleSheet, FlatList, Platform } from 'react-native';
import { Colors, Labels } from '../../utils';
import { InputSearch, SecondaryText, TopOfferText } from '../atoms';
import { BoxHeader, CardOffer, CarouselList } from '../organisms';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center'
  },
  box: {
    marginTop: Platform.OS === 'android' ? 35 : 65,
    width: '90%'
  },
  text: {
    width: '88%',
    marginBottom: 6
  },
  list: {
    width: '90%'
  },
  noList: {
    marginTop: 25
  }
});

export const HomeTemplate = ({
  onPressCart,
  onPressLogout,
  onChangeText,
  value,
  data,
  onPressMore,
  listFruit
}) => (
  <View style={styles.container}>
    <View style={styles.box}>
      <BoxHeader
        onPressCart={onPressCart}
        onPressLogout={onPressLogout}
      />
      <InputSearch
        value={value}
        onChangeText={onChangeText}
        placeholder={Labels.pesquisar}
      />
      <CardOffer />
    </View>
    <View style={styles.text}>
      <SecondaryText txt={Labels.frutas} />
    </View>
    {data.length > 0 ? (
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CarouselList
            onPressMore={() => onPressMore(item.fruit, item.price)}
            data={item}
            listFruit={listFruit}
            disabled={!!JSON.stringify(listFruit).includes(item.fruit)}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    )
      : (
        <View style={styles.noList}>
          <TopOfferText txt={Labels.nenhumItemCorr} />
        </View>
      )}
  </View>
);
