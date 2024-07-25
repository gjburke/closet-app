import { StyleSheet, Text, View } from 'react-native' 
import {Dimensions} from 'react-native';

export default function Piece() {
    return (
        <View style={styles.item}>
            <Text>This is a piece of clothing!</Text>
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'blue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        width: windowWidth * 0.45,
        height: windowWidth * 0.45,
    },
    title: {
        fontSize: 32,
    },
});