import { Image, StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParams } from '../../../navigators/MainNavigator';
import { ItemProps } from '../../../screens/PieceScreen';

type Props = NativeStackScreenProps<RootStackParams, "PieceScreen">;

export default function PieceView({ piece }: ItemProps) {
  // Same issue with the image as with the outfits here
  return (
    <View style={ styles.container }>
      <Text>This is the piece view</Text>
      <Image source={ (() => {
        if (!piece.image_uri) {
          return require('./../../../../assets/splash.png');
        } else {
          return { uri: piece.image_uri };
        }
      })()
    } style={ styles.image }/>
      <Text>Name: { piece.name }</Text>
      <Text>Type: { piece.type } </Text>
      <Text>Size: { piece.size } </Text>
      <Text>Color: { piece.color } </Text>
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