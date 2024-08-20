import { View, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { RootStackParams } from '../../navigators/MainNavigator';
import type { StackNavigationProp } from '@react-navigation/stack';  

// Ultimately the whole wayt that this will have to be done is going to be very different, likely involving passing props down and such
// My idea is: have lists need to have props passed into them, then lists can be more universal
// And this button will be able to know when things are added in (possibly?) so then stuff will update correctly
// Basically, need to have the redux store calls above everything that needs to update
// So for this and the GeneratorList, should get the revelant lists and stuff passed as props, and all the redux is help by higher stuff
export default function GeneratorAddOutfitButton() {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

    function handlePress() {
        navigation.navigate('OutfitAdder');
    }

    return (
        <Pressable  onPress={ handlePress }>
            <View style={ styles.addButton }>
                <Text>Add Outfit To Closet</Text>
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