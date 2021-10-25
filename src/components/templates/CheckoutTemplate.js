import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Colors, Labels, maskCPF, Width } from '../../utils';
import {
  PrincipalText,
  PrincipalButton,
  TitleText,
  VerticalBar,
  DataText
} from '../atoms';
import { ViewChekcoutTexts } from '../molecules';
import { NoItem } from '../organisms';

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
  list: {
    marginTop: 45,
    width: Width(90)
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: Width(100)
  },
  align: {
    alignItems: 'center'
  },
  mTop: {
    marginTop: 10
  }
});

export const CheckoutTemplate = ({
  data,
  onPressCheck,
  cpf,
  total,
  onPressNoItem,
  loading
}) => (
  <View style={styles.container}>
    <View style={styles.text}>
      <PrincipalText txt={Labels.checkout} />
    </View>
    {total <= 0
      ? <NoItem onPressNoItem={onPressNoItem} />
      : (
        <>
          <View style={styles.list}>
            <TitleText txt={Labels.cliente} />
            <DataText txt={cpf ? maskCPF(cpf) : '-'} />
            <View style={styles.mTop} />
            <VerticalBar />
            {data.map((item, i) => (
              <ViewChekcoutTexts
                list
                textTitle={item.fruit}
                textData={item.price ? `R$${item.price}` : '-'}
                key={String(i)}
              />
            ))}
            <VerticalBar />
            <ViewChekcoutTexts
              textTitle={Labels.valorTotal}
              textData={total ? `R$${total}` : '-'}
            />
          </View>
          <View style={styles.button}>
            <View style={styles.align}>
              <PrincipalButton
                onPress={onPressCheck}
                txt={Labels.compartilharPDF}
                loading={loading}
              />
            </View>
          </View>
        </>
      )}
  </View>
);
