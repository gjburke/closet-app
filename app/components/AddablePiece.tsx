import { Pressable, StyleSheet, Text, View } from 'react-native' 
import { Dimensions } from 'react-native';
import { addPiece } from './generatorSlice';
import { ItemProps } from './AddablePieceList';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../hooks';

export default function AddablePiece({ piece }: ItemProps) {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    function handlePress() {
        dispatch(addPiece(piece));
        navigation.goBack();
    }

    return (
        <Pressable onPress={handlePress}> 
            <View style={styles.item}>
                <Text>This is a piece of clothing with name: {piece.name}!</Text>
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
});