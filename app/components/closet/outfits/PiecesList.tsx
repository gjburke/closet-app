import { StyleSheet, FlatList, View } from "react-native";
import Piece from './../clothes/Piece';
import { useAppSelector } from "../../../hooks";
import { PieceType } from './../clothes/clothesSlice'

export type ItemProps = { piece: PieceType }

export default function PiecesList() {
  const pieces = useAppSelector((state) => state.clothes.pieces);

  const DATA: PieceType[] = [];
  pieces.forEach(val => DATA.push(Object.assign({}, val)));

  return (
    <View style={styles.container}>
      <FlatList
      data={DATA}
      numColumns={2}
      // Render add button instead of piece for pieces typed 'button'
      renderItem={({item}) => <Piece piece={item}/> }
      keyExtractor={item => item.name}
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