import React from 'react';
import { TouchableOpacity } from 'react-native';

export const ChildrenButton = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress}>
    {children}
  </TouchableOpacity>
);
