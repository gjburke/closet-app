import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { addOutfit } from './outfitSlice';
import { clear } from '../../generator/generatorSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';

export default function OutfitAdder() {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');
    const [submittable, setSubmittable] = useState(false);

    const pieces = useAppSelector((state) => state.generator.pieces);
    const outfits = useAppSelector((state) => state.outfits.outfits);

    const outfitNames = new Set();
    outfits.forEach((outfit => outfitNames.add(outfit.name)));

    function checkSubmittable(name: string) {
        return !(name.length <= 0 || outfitNames.has(name));
    }

    function onChangeName(newName: string) {
        setName(newName);
        setSubmittable(checkSubmittable(newName));
    }

    function handleSubmit() {
        dispatch(addOutfit({ name: name, pieces }));
        dispatch(clear())
        setName('');
        navigation.goBack();
    }

    return (
        <View style={ styles.container }>
            <Text>This is the outfit adder</Text>
            <TextInput style={{ height: 40 }} placeholder="Type Name of Outfit Here" onChangeText={ (newName) => onChangeName(newName) } defaultValue={name}/>
            {
                submittable ? (
                    <Pressable onPress={ handleSubmit }> 
                        <Text>Add Outfit</Text>
                    </Pressable>
                ) : (
                    <Pressable style={{ backgroundColor: 'red' }}> 
                        <Text>Add Outfit</Text>
                    </Pressable>
                )
            }
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