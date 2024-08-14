import { StyleSheet, View, Text, Pressable } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParams } from '../navigators/MainNavigator';
import PieceView from '../components/closet/clothes/PieceView';
import { PieceType } from './../components/closet/clothes/clothesSlice';
import { useState } from 'react';
import PieceEditor from '../components/closet/clothes/PieceEditor';

export type ItemProps = { piece: PieceType }
type Props = NativeStackScreenProps<RootStackParams, "PieceScreen">;

export default function PieceScreen({ route, navigation }: Props) {
  const piece = route.params.piece;
  const [isEditing, setIsEditing] = useState(false);

  function edit() {
    setIsEditing(true);
  }
  function revert() {
    setIsEditing(false);
  }
  function deletePiece() {
    navigation.goBack();
  }
  
  if (isEditing) {
    return (
      <View style= { styles.container }>
        <Pressable onPress={deletePiece}>
          <Text>Delete Piece</Text>
        </Pressable>
        <Pressable onPress={revert}>
          <Text>Revert Changes</Text>
        </Pressable>
        <PieceEditor piece={piece}/>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>GO BACK</Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={ styles.container }>
        <Pressable onPress={edit}>
          <Text>Edit Piece</Text>
        </Pressable>
        <PieceView piece={ piece }/>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>GO BACK</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});