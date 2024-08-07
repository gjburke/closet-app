import { Pressable, StyleSheet, Text } from 'react-native';
import { Dimensions } from 'react-native';

export default function GeneratorAddButton() {
    return (
        <Pressable style={ styles.addButton }>
            <Text>Add Piece To Outfit</Text>
        </Pressable>
    );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  addButton: {
    width: windowWidth * 0.45,
    height: windowWidth * 0.45,
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});