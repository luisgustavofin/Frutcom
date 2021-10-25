import React from 'react';
import { Text } from 'react-native';
import { TextStyles } from '../../utils';

export const NoItemTitleText = ({ txt }) => <Text style={TextStyles.h3BlackBold}>{txt}</Text>;

export const NoItemAbstractText = ({ txt }) => <Text style={[TextStyles.h7GrayNormal, { textAlign: 'center', marginTop: 15 }]}>{txt}</Text>;
