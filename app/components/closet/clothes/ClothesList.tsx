import { StyleSheet, FlatList, View } from "react-native";
import Piece from './Piece';
import AddButton from "./AddButton";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { PieceType } from './clothesSlice'

export type ItemProps = { piece: PieceType }

export default function ClothesList() {
  // Get the pieces from the store and create button object 
  const pieces = useAppSelector((state) => state.clothes.pieces);
  const pieceButton: PieceType = {
    name: 'button',
    type: 'button', 
    size: 'button',
    color: 'button',
  };

  // Add the button to the front and then copy all of the pieces to the dosplay data 
  const DATA: PieceType[] = [pieceButton];
  pieces.forEach(val => DATA.push(Object.assign({}, val)));

  return (
    <View style={styles.container}>
      <FlatList
      data={DATA}
      numColumns={2}
      // Render add button instead of piece for pieces typed 'button'
      renderItem={({item}) => {
        if (item.type === 'button') {
          return <AddButton/>
        }
        return <Piece piece={item}/>
      }}
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