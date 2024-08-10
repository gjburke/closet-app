import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { addOutfit } from './outfitSlice';
import { clear } from './generatorSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

export default function OutfitAdder() {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const [text, setText] = useState('');
    const pieces = useAppSelector((state) => state.generator.pieces)

    function handleClick() {
        pieces.forEach(piece => console.log(piece))
        dispatch(addOutfit({ name: text, pieces }));
        dispatch(clear())
        setText('');
        navigation.goBack();
    }
    return (
        <View style={ styles.container }>
            <Text>This is the outfit adder</Text>
            <TextInput style={{ height: 40 }} placeholder="Type Name of Outfit Here" onChangeText={newText => setText(newText)} defaultValue={text}/>
            <Pressable onPress={ handleClick }> 
                <Text>Add Outfit</Text>
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