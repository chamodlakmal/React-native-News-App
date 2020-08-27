import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'yellow'
    },
    image: {
        width: '100%',
        borderRadius: 5,
        aspectRatio: 16 / 9,
    }
})

export default function ArticleCard() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg' }} style={styles.image} />
            <Text>Article</Text>
        </View>
    )
}
