import { Image, StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { ItemProps } from '../../../screens/PieceScreen';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { PieceType, editPiece } from './clothesSlice';
import * as ImagePicker from 'expo-image-picker';

export default function PieceEditor({ piece }: ItemProps) {
    const [name, setName] = useState(piece.name);
    const [type, setType] = useState(piece.type);
    const [size, setSize] = useState(piece.size);
    const [color, setColor] = useState(piece.color);
    const [image, setImage] = useState(piece.image_uri);
    const [addable, setAddable] = useState(true);
    const pieces = useAppSelector((state) => state.clothes.pieces)
    const dispatch = useAppDispatch();

    function saveEdits() {
        const newPiece: PieceType = {
            name: name,
            type: type,
            size: size,
            color: color,
            image_uri: image,
        };
        alert('Edits Saved');
        dispatch(editPiece({ name: piece.name, newPiece }));
    }

    // Issue with image not re-rendering once photo is taken, not sure why yet
    // But it does still work technically, one you go out and in it changes correctly
    // Also only is if the image starts as blank...
    async function takePhoto() {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

      if (permissionResult.granted == false) {
        alert("You have not allowed camera permissions");
        return;
      }

      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.back,
        quality: 0,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri)
      }
    }

    // Input checking
    const names = new Set();
    pieces.forEach(piece => names.add(piece.name));

    function checkAddable() {
      return (
        name.length > 0 &&
        type.length > 0 &&
        size.length > 0 &&
        color.length > 0 &&
        (name == piece.name || !names.has(name))
      );
    }

    function updateText(setText: (value: React.SetStateAction<string>) => void, text: string) {
      setText(text);
      setAddable(checkAddable);
    }

    return (
        <View style={ styles.container }>
        <Text>This is the piece editor</Text>
        <View style={ styles.imagePicker }>
            <Image source={ (() => {
                if (!piece.image_uri) {
                return require('./../../../../assets/splash.png');
                } else {
                return { uri: image };
                }
            })()
            } style={ styles.image }/>
            <Pressable onPress={takePhoto}>
            <Text>Take Photo</Text>
            </Pressable>
        </View>
        <View>
            <Text>Name: </Text>
            <TextInput style={{ height: 30 }} onChangeText={newName => updateText(setName, newName)} defaultValue={name}/>
            <Text>Type: </Text>
            <TextInput style={{ height: 30 }} onChangeText={newType => updateText(setType, newType)} defaultValue={type}/>
            <Text>Size: </Text>
            <TextInput style={{ height: 30 }} onChangeText={newSize => updateText(setSize, newSize)} defaultValue={size}/>
            <Text>Color: </Text>
            <TextInput style={{ height: 30 }} onChangeText={newColor => updateText(setColor, newColor)} defaultValue={color}/>
        </View>
            {
              addable ? (
                <Pressable onPress={ saveEdits }> 
                    <Text>Add Piece</Text>
                </Pressable>
              ) : (
                <Pressable style={{ backgroundColor: 'red' }}> 
                    <Text>Cannot Add Piece</Text>
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
  image: {
      height: 200,
      width: 200,
  },
  imagePicker: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});