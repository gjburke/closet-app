import { Image, Pressable, StyleSheet, Text, View } from 'react-native' 
import { Dimensions } from 'react-native';
import { ItemProps } from './ClothesList';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../navigators/MainNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

export default function Piece({ piece }: ItemProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

    function handlePress() {
        navigation.navigate('PieceScreen', { piece })
    }

    return (
        <Pressable onPress={handlePress}> 
            <View style={styles.item}>
                <Text>This is a piece of clothing with name: {piece.name}!</Text>
                <Image source={ (() => {
                  if (!piece.image_uri) {
                    return require('./../../../../assets/splash.png');
                  } else {
                    return { uri: piece.image_uri };
                  }
                })()
              } style={ styles.image }/>
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
    image: {
        height: 50,
        width: 50,
    },
});