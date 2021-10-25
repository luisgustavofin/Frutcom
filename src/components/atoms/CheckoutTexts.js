import React from 'react';
import { Text } from 'react-native';
import { TextStyles } from '../../utils';

export const TitleText = ({ txt }) => <Text style={TextStyles.h5BlackBold}>{txt}</Text>;

export const DataText = ({ txt, textAlign }) => <Text style={[TextStyles.h5GrayNormal, { textAlign: !textAlign ? 'auto' : 'center' }]}>{txt}</Text>;
