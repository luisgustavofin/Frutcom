import React from 'react';
import { View, FlatList, StyleSheet, Platform } from 'react-native';
import { Colors, Labels } from '../../utils';
import { PrincipalText, PrincipalButton } from '../atoms';
import { CardList, NoItem } from '../organisms';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center'
  },
  text: {
    marginTop: Platform.OS === 'android' ? 35 : 65,
    marginBottom: 25
  },
  flat: {
    marginTop: 45,
    width: '90%'
  }
});

export const CartTemplate = ({
  onPressDelete,
  onPressNoItem,
  onPressCheckout,
  data,
  total
}) => (
  <View style={styles.container}>
    <View style={styles.text}>
      <PrincipalText txt={Labels.minhaLista} />
    </View>
    {total <= 0
      ? <NoItem onPressNoItem={onPressNoItem} />
      : (
        <>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <CardList
                onPressDelete={() => onPressDelete(item.fruit, item.price)}
                data={item}
              />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
          <PrincipalButton
            onPress={onPressCheckout}
            txt={Labels.buttonCheckout(total)}
          />
        </>
      )}
  </View>
);
