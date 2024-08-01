import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParams } from '../navigators/MainNavigator';
import { useAppSelector } from '../hooks';

type Props = NativeStackScreenProps<RootStackParams, "PieceScreen">;

export default function PieceScreen({ route, navigation }: Props) {
  const pieces = useAppSelector((state) => state.clothes.pieces);
  const ID = route.params.id;

  const piece = pieces.filter((piece) => piece.id === ID)[0];
  
  return (
    <View style={ styles.container }>
      <Text>This is the piece screen</Text>
      <Text>The name for the piece is: { piece.name }</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>GO BACK</Text>
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