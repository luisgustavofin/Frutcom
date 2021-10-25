import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors, Height, TextStyles } from '../../utils';

const styles = StyleSheet.create({
  container: {
    height: Height(7),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.gray_light,
    borderRadius: 20,
    marginTop: 35,
    marginBottom: 20
  },
  input: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    paddingLeft: 10
  }
});

export const InputSearch = ({
  iconLeft = <Feather name="search" size={Height(3)} color={Colors.gray} />,
  onChangeText,
  value,
  placeholder
}) => (
  <View style={styles.container}>
    {iconLeft}
    <TextInput
      maxLength={30}
      onChangeText={onChangeText}
      style={[styles.input, TextStyles.h7GrayBold]}
      value={value}
      placeholder={placeholder}
    />
  </View>
);
