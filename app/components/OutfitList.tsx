import { StyleSheet, FlatList, View } from "react-native";
import Outfit from './Outfit';
import AddButton from "./AddButton";
import { useAppSelector, useAppDispatch } from "../hooks";
import { OutfitType } from './outfitSlice'

export type ItemProps = { outfit: OutfitType }

export default function ClothesList() {
  // Get the outfits from the store
  const outfits = useAppSelector((state) => state.outfits.outfits)
  // Add the button to the front and then copy all of the pieces to the dosplay data 
  const DATA: OutfitType[] = [];
  outfits.forEach(outfit => DATA.push(Object.assign({}, outfit)));

  return (
    <View style={styles.container}>
      <FlatList
      data={DATA}
      numColumns={2}
      // Render add button instead of piece for pieces typed 'button'
      renderItem={({item}) => <Outfit outfit={item}/>}
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