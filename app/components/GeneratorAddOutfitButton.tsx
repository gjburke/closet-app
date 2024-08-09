import { View, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { RootStackParams } from '../navigators/MainNavigator';
import type { StackNavigationProp } from '@react-navigation/stack';  

export default function GeneratorAddOutfitButton() {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

    function handlePress() {
        navigation.navigate('OutfitAdder');
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