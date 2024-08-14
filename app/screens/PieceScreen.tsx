import { StyleSheet, View, Text, Pressable } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParams } from '../navigators/MainNavigator';
import PieceView from '../components/closet/clothes/PieceView';
import { PieceType } from './../components/closet/clothes/clothesSlice';

export type ItemProps = { piece: PieceType }
type Props = NativeStackScreenProps<RootStackParams, "PieceScreen">;

export default function PieceScreen({ route, navigation }: Props) {
  const piece = route.params.piece;
  
  return (
    <View style={ styles.container }>
      <PieceView piece={ piece }/>
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