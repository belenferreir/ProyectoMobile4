import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';

interface Props {
    title: string;
    style?: ViewStyle;
}

const MyModal = ({title, style}: Props) => {
    return (
        <View style={[styles.modal, style]}>
            <Text>{title}</Text>
            <Text>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Quia libero deleniti tempora obcaecati, 
                corrupti maxime delectus voluptatem qui 
                ratione sit accusamus magni nulla dolore 
                sunt minus atque, nobis cumque est.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    modal: {
        width: 697,
        height: 538,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
    },
    modal1: {
        backgroundColor: 'white',
        color: 'white',
    },
    modal2: {
        backgroundColor: 'rgba(81, 81, 81, 1)',    
        color: 'rgba(81, 81, 81, 1)',
    }
});

export default MyModal;