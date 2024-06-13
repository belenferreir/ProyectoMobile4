import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';

interface Props {
    text: string;
    style?: ViewStyle;
}

const MyCheckbox = ({text, style}: Props) => {
  return (
    <View style={[styles.checkboxContainer, style]}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    width: 159,
    height: 147,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox1: {
    backgroundColor: 'rgba(81, 81, 81, 1)',
    color: 'white',
  },
  checkbox2: {
    backgroundColor: 'rgb(254, 252, 252)',
    color: 'rgba(81, 81, 81, 1)',
  },
});

export default MyCheckbox;