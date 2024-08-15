import { StyleSheet, View, Text, Pressable } from 'react-native';
import { ItemProps } from '../../../screens/OutfitScreen';
import GeneratorList from '../../generator/GeneratorList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPieces } from '../../generator/generatorSlice';

export default function OutfitEditor({ outfit }: ItemProps) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPieces(outfit.pieces));
    });

    function saveOutfit() {
        alert("Edits Saved");
    }

    return (
        <View style={ styles.container }>
            <Text>This is the outfit editor</Text>
            <Text>The name for the outfit is: { outfit.name }</Text>
            <GeneratorList/>
            <Pressable onPress={saveOutfit}>
                <Text>Save Changes</Text>
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