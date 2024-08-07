import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import { Dimensions } from 'react-native';
import { PieceType } from './clothesSlice';

type ItemProps = {
    piece: PieceType;
}

function AddButton() {
    return (
        <Pressable style={ styles.addButton }>
            <Text>Add Piece To Outfit</Text>
        </Pressable>
    );
}

function Piece( { piece }: ItemProps) {
    return (
        <View>
            <View style={styles.item}>
                <Text>This is a piece of clothing with name: {piece.name}!</Text>
            </View>
        </View>
    );
}

function PieceList() {
    const pieceButton: PieceType = {
        id: 'button',
        name: 'button',
        type: 'button', 
        size: 'button',
        color: 'button',
    };
    const pieces: PieceType[] = [pieceButton]
    return (
        <View style={ styles.container }>
            <FlatList
            data={pieces}
            numColumns={2}
            renderItem={({item}) => {
                return item.type === 'button' ? <AddButton/> : <Piece piece={item}/>
            }}
            /> 
        </View>
    );
}

export default function Generator() {
    <View style={ styles.container }>
        <PieceList/>
    </View>
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'blue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        width: windowWidth * 0.45,
        height: windowWidth * 0.45,
    },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  addButton: {
    width: windowWidth * 0.45,
    height: windowWidth * 0.45,
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});