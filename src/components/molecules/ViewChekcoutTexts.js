import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TitleText, DataText } from '../atoms';

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8
  }
});

export const ViewChekcoutTexts = ({ textTitle, textData, list }) => (
  <View style={styles.box}>
    {list ? <DataText txt={textTitle || '-'} /> : <TitleText txt={textTitle || '-'} /> }
    {list ? <TitleText txt={textData || '-'} /> : <TitleText txt={textData || '-'} /> }
  </View>
);
