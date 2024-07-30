import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { addPiece, PieceType } from './clothesSlice';
import { useAppDispatch } from '../hooks';

const samplePiece: PieceType = {
  id: '1',
  name: 'the rodgers',
  type: 'shorts', 
  size: 'big as hell',
  color: 'blue',
};

export default function PieceAdder() {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const [text, setText] = useState('');

    function handleClick() {
        setText('')
        dispatch(addPiece({ ...samplePiece, id: text}));
        navigation.goBack();
    }

    return (
        <View style={ styles.container }>
            <Text>This is the piece adder</Text>
            <TextInput style={{ height: 40 }} placeholder="Type ID Here" onChangeText={newText => setText(newText)} defaultValue={text}/>
            <Pressable onPress={handleClick}> 
                <Text>Add Piece</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});