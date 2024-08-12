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
    const [image, setImage] = useState<string | null>(null);
    const [status, requestCameraPermission] = ImagePicker.useCameraPermissions();

    async function takePhoto() {
      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.front,
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
            <View style={ styles.container }>
              { image && <Image source={{ uri: image }}/>}
              {
                (!status || !status.granted)
                ? <Pressable onPress={takePhoto}>
                    <Text>Take Photo</Text>
                  </Pressable>
                : <Pressable onPress={requestCameraPermission}>
                    <Text>Allow Camera</Text>
                  </Pressable>
              }
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
  image: {
    height: 400,
    width: 400,
  },
});