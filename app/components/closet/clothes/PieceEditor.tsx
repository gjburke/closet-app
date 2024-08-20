import { Image, StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { ItemProps } from '../../../screens/PieceScreen';
import { useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { PieceType, editPiece } from './clothesSlice';
import * as ImagePicker from 'expo-image-picker';

export default function PieceEditor({ piece }: ItemProps) {
    const [name, setName] = useState(piece.name);
    const [type, setType] = useState(piece.type);
    const [size, setSize] = useState(piece.size);
    const [color, setColor] = useState(piece.color);
    const [image, setImage] = useState(piece.image_uri);
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
            <Text>Update Name: </Text>
            <TextInput style={{ height: 30 }} onChangeText={newName => setName(newName)} defaultValue={name}/>
            <Text>Update Type: </Text>
            <TextInput style={{ height: 30 }} onChangeText={newType => setType(newType)} defaultValue={type}/>
            <Text>Update Size: </Text>
            <TextInput style={{ height: 30 }} onChangeText={newSize => setSize(newSize)} defaultValue={size}/>
            <Text>Update Color: </Text>
            <TextInput style={{ height: 30 }} onChangeText={newColor => setColor(newColor)} defaultValue={color}/>
        </View>
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
  imagePicker: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});