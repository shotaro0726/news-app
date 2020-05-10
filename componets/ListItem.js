import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
    itemContainer: {
        height: 100,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        flexDirection: "row",
    },
    leftContainer: {
        width: 100,
    },
    rightContainer: {
        flex: 1,
        padding: 10,
        justifyContent: "space-between"
    },
    text: {
        fontSize: 16,
    },
    subtext: {
        fontSize: 12,
        color: "gray",
    },
});

const ListItem = ({imageURL, title, author}) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.leftContainer}>
                {!!imageURL && (
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={{ uri: imageURL }}
                    />
                )}
            </View>
            <View style={styles.rightContainer}>
                <Text numberOfLines={3} style={styles.text}>
                   {title}
          </Text>
                <Text style={styles.subtext}>{author}</Text>
            </View>
        </View>
    )
}

export default ListItem;