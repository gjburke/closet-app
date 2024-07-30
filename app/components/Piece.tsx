import { StyleSheet, Text, View } from 'react-native' 
import {Dimensions} from 'react-native';
import { ItemProps } from './ClothesList';

export default function Piece({ id }: ItemProps) {
    return (
        <View style={styles.item}>
            <Text>This is a piece of clothing with id: {id}!</Text>
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