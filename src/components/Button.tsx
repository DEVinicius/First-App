import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface IButton {
    handleAction: (action:string) => void;
}

export function Button ({handleAction}:IButton){
    return (
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.8}
            onPress={(event) => {
                handleAction(event.target.toString());
            }}
        >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#A370F7",
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: "bold",
    }
})