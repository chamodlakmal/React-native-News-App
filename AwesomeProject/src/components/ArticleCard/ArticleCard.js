import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import COLORS from '../../utils/constants';


const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 200,
    },
    image: {
        width: '100%',
        borderRadius: 5,
        aspectRatio: 16 / 9,
        resizeMode: "contain",
    },
    title: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',

    },
    bottomTextContainer: {
        flexDirection: 'row',
    }
})

export default function ArticleCard() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg' }} style={styles.image} />
            <Text style={styles.title}>Article</Text>
            <View style={styles.bottomTextContainer}>
                <Text >New York Time </Text>
                <Text >4 hours ago</Text>
            </View>
        </View>
    )
}
