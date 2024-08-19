import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { ItemProps } from '../../../screens/OutfitScreen';
import GeneratorList from '../../generator/GeneratorList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clear, setPieces } from '../../generator/generatorSlice';
import { useAppSelector } from '../../../hooks';
import { OutfitType, editOutfit } from './outfitSlice';

function OutfitSelector({ outfit }: ItemProps) {
    const dispatch = useDispatch();
    const [name, setName] = useState(outfit.name);

    const pieces = useAppSelector((state) => state.generator.pieces)

    function saveOutfit() {
        alert("Edits Saved");
        const newOutfit: OutfitType = {
            ...outfit, 
            name: name,
            pieces: pieces,
        }
        dispatch(editOutfit({name: outfit.name, newOutfit: newOutfit}));
        alert('Edits saved');
    }

    return (
        <View style={ styles.container }>
            <Text>Update Name: </Text>
            <TextInput style={{ height: 40 }} onChangeText={name => setName(name)} defaultValue={name}/>
            <GeneratorList/>
            <Pressable onPress={saveOutfit}>
                <Text>Save Changes</Text>
            </Pressable>
        </View>
    );
}

export default function OutfitEditor({ outfit }: ItemProps) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPieces(outfit.pieces));
        return () => {
            dispatch(clear());
        }
    });

    // For the render, maybe when changing name stuff you can pass in the
    // New name variables for OutfitSelector Render, that will hopefully pass
    // Into the outfit selector and actually save when save button is hit.
    // (without rerendering all of OutfitEditor hopefully...if not, will find solution)

    return (
        <View style={ styles.container }>
            <Text>This is the outfit editor</Text>
            <Text>The name for the outfit is: { outfit.name }</Text>
            <OutfitSelector outfit={outfit}/>
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