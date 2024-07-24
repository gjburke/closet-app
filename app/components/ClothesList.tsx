import { StyleSheet, FlatList, View } from "react-native";
import Piece from './Piece';
import AddButton from "./AddButton";
import { useAppSelector, useAppDispatch } from "../hooks";
import { PieceType } from './clothesSlice'

export default function ClothesList() {
  // Get the pieces from the store and create button object 
  const pieces = useAppSelector((state) => state.clothes.pieces);
  const pieceButton: PieceType = {
    id: 'button',
    name: 'button',
    type: 'button', 
    size: 'button',
    color: 'button',
  };

  // Copy the pieces from the store and push the button object as the final piece
  // Finally reverse the data in order to have button first (this may need changing based on filters and such)
  // Reversing may not work well when filtering, so probably need to contruct the setup a different, more efficient way eventually
  const DATA: PieceType[] = [];
  pieces.forEach(val => DATA.push(Object.assign({}, val)));
  DATA.push(pieceButton);
  DATA.reverse();

  return (
    <View style={styles.container}>
      <FlatList
      data={DATA}
      numColumns={2}
      horizontal={false} 
      // Render add button instead of piece for pieces typed 'button'
      renderItem={({item}) => {
        if (item.type == 'button') {
          return <AddButton/>
        }
        return <Piece/>
      }}
      keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    position: 'absolute',
    top: 8,
    left: 8,
  },
});