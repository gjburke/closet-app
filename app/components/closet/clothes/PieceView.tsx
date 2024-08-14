import { Image, StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParams } from '../../../navigators/MainNavigator';
import { ItemProps } from '../../../screens/PieceScreen';

type Props = NativeStackScreenProps<RootStackParams, "PieceScreen">;

export default function PieceView({ piece }: ItemProps) {
  return (
    <View style={ styles.container }>
      <Text>This is the piece screen</Text>
      <Text>The name for the piece is: { piece.name }</Text>
      <Image source={ (() => {
        if (!piece.image_uri) {
          return require('./../../../../assets/splash.png');
        } else {
          return { uri: piece.image_uri };
        }
      })()
    } style={ styles.image }/>
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