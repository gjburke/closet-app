import { StyleSheet, View, Text, Pressable } from 'react-native';
import { ItemProps } from '../../../screens/OutfitScreen';
import GeneratorList from '../../generator/GeneratorList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPieces } from '../../generator/generatorSlice';
import { useAppSelector } from '../../../hooks';
import { editOutfit } from './outfitSlice';

function OutfitSelector({ outfit }: ItemProps) {
    const pieces = useAppSelector((state) => state.generator.pieces)
    const dispatch = useDispatch();

    function saveOutfit() {
        alert("Edits Saved");
        const newOutfit = {...outfit, pieces: pieces}
        dispatch(editOutfit({name: outfit.name, newOutfit: newOutfit}));
    }

    return (
        <View style={ styles.container }>
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