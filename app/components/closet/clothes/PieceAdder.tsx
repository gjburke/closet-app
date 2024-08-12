import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { addPiece, PieceType } from './clothesSlice';
import { useAppDispatch } from '../../../hooks';
import * as ImagePicker from 'expo-image-picker';

const samplePiece: PieceType = {
  name: 'the rodgers',
  type: 'shorts', 
  size: 'big as hell',
  color: 'blue',
};

export default function PieceAdder() {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const [text, setText] = useState('');

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

    function handleClick() {
      dispatch(addPiece({ ...samplePiece, name: text }));
      setText('');
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
            <TextInput style={{ height: 40 }} placeholder="Type Name Here" onChangeText={newText => setText(newText)} defaultValue={text}/>
            <Pressable onPress={handleClick}> 
                <Text>Add Piece</Text>
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