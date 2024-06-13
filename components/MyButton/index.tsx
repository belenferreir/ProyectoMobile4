import React from "react";
import {Text, Image, TouchableOpacity, StyleSheet, ViewStyle, ImageSourcePropType} from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    icon: ImageSourcePropType;
}

function MyButton({title, onPress, style, icon}: Props) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Image source={icon} />
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 362,
        height: 47,
        borderRadius: 8,
        padding: 8,
        backgroundColor: 'rgba(76, 201, 134, 1)',
    },
});  

export default MyButton; 