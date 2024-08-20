import { Pressable, StyleSheet, Text, View } from 'react-native' 
import {Dimensions} from 'react-native';
import { ItemProps } from './OutfitList';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../navigators/MainNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

export default function Outfit({ outfit }: ItemProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

    function handlePress() {
        navigation.navigate('OutfitScreen', { outfit })
    }

    return (
        <Pressable onPress={handlePress}> 
            <View style={styles.item}>
                <Text>This is an outfit with the name: {outfit.name}!</Text>
            </View>
        </Pressable>
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