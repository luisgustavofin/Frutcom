import React from 'react';
import { Switch, Platform } from 'react-native';
import { Colors } from '../../utils';

export const GenericSwitch = ({ switchValue, changeSwitch }) => (
  <Switch
    style={{ transform: [{ scaleX: Platform.OS === 'ios' ? 1 : 1.5 }, { scaleY: Platform.OS === 'ios' ? 1 : 1.5 }] }}
    trackColor={{ false: Colors.gray, true: Colors.green }}
    ios_backgroundColor={Colors.gray}
    thumbColor={Colors.white}
    onValueChange={changeSwitch}
    value={switchValue}
  />
);
