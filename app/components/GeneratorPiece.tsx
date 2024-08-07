import { View, Pressable, StyleSheet, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { ItemProps } from './GeneratorList';

export default function GeneratorPiece( { piece }: ItemProps) {
    return (
        <View>
            <View style={styles.piece}>
                <Text>This is a piece of clothing with name: {piece.name}!</Text>
            </View>
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  piece: {
    width: windowWidth * 0.45,
    height: windowWidth * 0.45,
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});