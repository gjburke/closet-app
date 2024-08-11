import { StyleSheet, FlatList, View } from "react-native";
import Outfit from './Outfit';
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { OutfitType } from './outfitSlice'

export type ItemProps = { outfit: OutfitType }

const TEST_DATA: Array<OutfitType> = [
    {
        name: "test 1",
        pieces: [{
            name: "test cloth 1",
            type: "test",
            size: "test",
            color: "test",
        }],
    },
    {
        name: "test 2",
        pieces: [{
            name: "test cloth 2",
            type: "test",
            size: "test",
            color: "test",
        }],
    },
    {
        name: "test 3",
        pieces: [{
            name: "test cloth 3",
            type: "test",
            size: "test",
            color: "test",
        }],
    },
];

export default function OutfitList() {
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