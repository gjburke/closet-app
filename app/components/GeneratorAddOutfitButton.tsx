import { View, Pressable, StyleSheet, Text } from 'react-native';
import { Dimensions } from 'react-native';

export default function GeneratorAddOutfitButton() {
    function handlePress() {
    }

    return (
        <Pressable  onPress={ handlePress }>
            <View style={ styles.addButton }>
                <Text>Add Piece To Outfit</Text>
            </View>
        </Pressable>
    );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  addButton: {
    width: windowWidth * 0.75,
    height: 75,
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});