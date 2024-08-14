import { Image, StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { ItemProps } from '../../../screens/PieceScreen';
import { useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { PieceType, editPiece } from './clothesSlice';

export default function PieceEditor({ piece }: ItemProps) {
    const [name, setName] = useState(piece.name);
    const dispatch = useAppDispatch();

    function saveEdits() {
        const newPiece: PieceType = {
            ...piece,
            name: name,
        };
        dispatch(editPiece({ name: piece.name, newPiece }));
    }

    return (
        <View style={ styles.container }>
        <Text>This is the piece editor</Text>
        <Text>Update Name: </Text>
        <TextInput style={{ height: 40 }} onChangeText={newName => setName(newName)} defaultValue={name}/>
        <Image source={ (() => {
            if (!piece.image_uri) {
            return require('./../../../../assets/splash.png');
            } else {
            return { uri: piece.image_uri };
            }
        })()
        } style={ styles.image }/>
        <Pressable onPress={saveEdits}>
            <Text>Save Edits</Text>
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
  image: {
      height: 200,
      width: 200,
  },
});