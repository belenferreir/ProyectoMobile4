import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface Props {
    title: string;
}

function MyButton({title}: Props) {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

export default MyButton;

