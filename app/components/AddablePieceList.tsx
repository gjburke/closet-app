import { StyleSheet, FlatList, View } from "react-native";
import { useAppSelector, useAppDispatch } from "../hooks";
import { PieceType } from './clothesSlice'
import AddablePiece from './AddablePiece';

export type ItemProps = { piece: PieceType }

export default function AddablePieceList() {
  const pieces = useAppSelector((state) => state.clothes.pieces);

  const DATA: PieceType[] = [];
  pieces.forEach(val => DATA.push(Object.assign({}, val)));

  return (
    <View style={styles.container}>
      <FlatList
      data={DATA}
      numColumns={2}
      // Render add button instead of piece for pieces typed 'button'
      renderItem={({item}) => <AddablePiece piece={item}/>}
      keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});