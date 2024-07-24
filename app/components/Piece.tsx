import { StyleSheet, Text, View } from 'react-native' 

export default function Piece() {
    return (
        <View style={styles.item}>
            <Text>This is a piece of clothing!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'blue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        height: 175,
        width: 175,
    },
    title: {
        fontSize: 32,
    },
});