import React, { useState } from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const MySwitches = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: '#ccc', true: '#2196F3' }}
                thumbColor={isChecked ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setIsChecked(previousState => !previousState)}
                value={isChecked}
                style={styles.switch}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    switch: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    },
});

export default MySwitches;
