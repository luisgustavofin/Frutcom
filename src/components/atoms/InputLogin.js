import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Height, Colors, TextStyles } from '../../utils';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: Height(7),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  input: {
    height: '100%',
    alignItems: 'center',
    paddingLeft: 10,
    flex: 1
  }
});

export const InputLogin = ({
  iconLeft,
  iconRight,
  label = '',
  onChangeText = () => {},
  value,
  secure = false,
  valueFilter = (valueToFilter) => valueToFilter,
  keyboardType,
  maxLength,
  placeholder
}) => {
  const [showText, setShowText] = useState(secure);
  return (
    <View style={styles.container}>
      {iconLeft}
      <TextInput
        accessibilityLabel={`text-input-${label}`}
        maxLength={maxLength}
        keyboardType={keyboardType}
        secureTextEntry={showText}
        onChangeText={onChangeText}
        style={[styles.input, TextStyles.h6BlackNormal]}
        value={valueFilter(value)}
        placeholder={placeholder}
      />
      {
        secure && (
          !showText ? (
            <Pressable
              accessibilityLabel="pressable-Eye"
              onPress={() => setShowText(!showText)}
            >
              <Ionicons name="ios-eye-outline" size={Height(3.5)} color={Colors.gray_dark} />
            </Pressable>
          )
            : (
              <Pressable
                accessibilityLabel="pressable-EyeClosed"
                onPress={() => setShowText(!showText)}
              >
                <Ionicons name="ios-eye-off-outline" size={Height(3.5)} color={Colors.gray_dark} />
              </Pressable>
            )
        )
      }
      {iconRight}
    </View>
  );
};
