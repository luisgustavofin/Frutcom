import React from 'react';
import { View, Text } from 'react-native';
import { TextStyles } from '../../utils';

export const ErrorMessage = ({ txt }) => (
  <View style={{ marginBottom: 10 }}>
    <Text style={TextStyles.h7RedBold}>{txt}</Text>
  </View>
);
