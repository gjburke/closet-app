import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { addPiece, PieceType } from './clothesSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import * as ImagePicker from 'expo-image-picker';

const samplePiece: PieceType = {
  name: 'the rodgers',
  type: 'shorts', 
  size: 'big as hell',
  color: 'blue',
};

export default function PieceAdder() {
    const navigation = useNavigation();
    const pieces = useAppSelector((state) => state.clothes.pieces)
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');

    // For the camera
    const [image, setImage] = useState<string>('');

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

    function isAddable() {
      return (
        name.length > 0 &&
        type.length > 0 &&
        size.length > 0 &&
        color.length > 0 &&
        !names.has(name)
      );
    }

    function handleClick() {
      dispatch(addPiece({ 
        name: name, 
        type: type,
        size: size,
        color: color,
        image_uri: image,
      }));
      navigation.goBack();
    }

    return (
        <View style={ styles.container }>
            <Text>This is the piece adder</Text>
            <View style={ styles.imagePicker }>
              <Image source={ (() => {
                  if (!image) {
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
                <TextInput style={{ height: 30 }} onChangeText={newName => setName(newName)} defaultValue={name}/>
                <Text>Type: </Text>
                <TextInput style={{ height: 30 }} onChangeText={newType => setType(newType)} defaultValue={type}/>
                <Text>Size: </Text>
                <TextInput style={{ height: 30 }} onChangeText={newSize => setSize(newSize)} defaultValue={size}/>
                <Text>Color: </Text>
                <TextInput style={{ height: 30 }} onChangeText={newColor => setColor(newColor)} defaultValue={color}/>
            </View>
            {
              isAddable() ? (
                <Pressable onPress={handleClick}> 
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
  imagePicker: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
});