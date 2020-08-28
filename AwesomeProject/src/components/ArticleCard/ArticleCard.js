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
        justifyContent: 'space-between'
    }
})

export default function ArticleCard({ imageUrl, title, source, timeago }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.bottomTextContainer}>
                <Text >{source} </Text>
                <Text >{timeago}</Text>
            </View>
        </View>
    )
}
