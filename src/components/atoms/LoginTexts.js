import React from 'react';
import { Text } from 'react-native';
import { TextStyles } from '../../utils';

export const LogoText = ({ txt }) => <Text style={TextStyles.h5BlackBold}>{txt}</Text>;

export const LogoSecondaryText = ({ txt }) => <Text style={TextStyles.h8Gray600}>{txt}</Text>;

export const SecondaryTitleText = ({ txt, margin }) => <Text style={[TextStyles.h3BlackBold, { marginBottom: margin ? 10 : 0 }]}>{txt}</Text>;
