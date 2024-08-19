import { Image, StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { ItemProps } from '../../../screens/PieceScreen';
import { useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { PieceType, editPiece } from './clothesSlice';

export default function PieceEditor({ piece }: ItemProps) {
    const [name, setName] = useState(piece.name);
    const [type, setType] = useState(piece.type);
    const [size, setSize] = useState(piece.size);
    const [color, setColor] = useState(piece.color);
    const dispatch = useAppDispatch();

    function saveEdits() {
        const newPiece: PieceType = {
            ...piece,
            name: name,
            type: type,
            size: size,
            color: color,
        };
        alert('Edits Saved');
        dispatch(editPiece({ name: piece.name, newPiece }));
    }

    return (
        <View style={ styles.container }>
        <Text>This is the piece editor</Text>
        <Image source={ (() => {
            if (!piece.image_uri) {
            return require('./../../../../assets/splash.png');
            } else {
            return { uri: piece.image_uri };
            }
        })()
        } style={ styles.image }/>
        <Text>Update Name: </Text>
        <TextInput style={{ height: 30 }} onChangeText={newName => setName(newName)} defaultValue={name}/>
        <Text>Update Type: </Text>
        <TextInput style={{ height: 30 }} onChangeText={newType => setName(newType)} defaultValue={type}/>
        <Text>Update Size: </Text>
        <TextInput style={{ height: 30 }} onChangeText={newSize => setName(newSize)} defaultValue={size}/>
        <Text>Update Color: </Text>
        <TextInput style={{ height: 30 }} onChangeText={newColor => setName(newColor)} defaultValue={color}/>
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