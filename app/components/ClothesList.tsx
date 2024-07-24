import { StyleSheet, FlatList, View } from "react-native";
import Piece from './Piece';
import AddButton from "./AddButton";

const DATA = [
    {
      id: 'fd7acbea-51b1-46c2-a2d5-3ad53abb28ba',
      title: 'Button',
      type: 'button',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      type: 'piece',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      type: 'piece',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      type: 'piece',
    },
];

export default function ClothesList() {
    return (
        <View style={styles.container}>
            <FlatList
            data={DATA}
            numColumns={2}
            horizontal={false} 
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