import React from 'react';
import { Text } from 'react-native';
import { TextStyles } from '../../utils';

export const TopOfferText = ({ txt }) => <Text style={TextStyles.h7GreenBold}>{txt}</Text>;

export const BottomOfferText = ({ txt }) => <Text style={TextStyles.h0GreenBold}>{txt}</Text>;
