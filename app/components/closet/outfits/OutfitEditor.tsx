import { StyleSheet, View, Text, Pressable } from 'react-native';
import { ItemProps } from '../../../screens/OutfitScreen';
import GeneratorList from '../../generator/GeneratorList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPieces } from '../../generator/generatorSlice';
import { useAppSelector } from '../../../hooks';

function OutfitSelector() {
    const pieces = useAppSelector((state) => state.generator.pieces)

    function saveOutfit() {
        alert("Edits Saved");
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

    return (
        <View style={ styles.container }>
            <Text>This is the outfit editor</Text>
            <Text>The name for the outfit is: { outfit.name }</Text>
            <OutfitSelector/>
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