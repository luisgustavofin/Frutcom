import React from 'react';
import { Text } from 'react-native';
import { TextStyles } from '../../utils';

export const SecondaryText = ({ txt }) => <Text style={[TextStyles.h5BlackBold, { marginTop: 20 }]}>{txt}</Text>;
