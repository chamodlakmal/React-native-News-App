import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent:'center',
        alignItems:'center',
    }
});

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}
