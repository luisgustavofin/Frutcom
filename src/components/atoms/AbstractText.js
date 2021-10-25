import React from 'react';
import { Text } from 'react-native';
import { TextStyles } from '../../utils';

export const AbstractText = ({ txt }) => <Text style={TextStyles.h6GrayNormal}>{txt}</Text>;

export const OrganicText = ({ txt }) => <Text style={TextStyles.h7Gray600}>{txt}</Text>;
