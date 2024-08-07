import { FlatList, StyleSheet, View} from 'react-native';
import { PieceType } from './clothesSlice'
import GeneratorAddButton from './GeneratorAddButton';

export type ItemProps = {
    piece: PieceType;
}

export default function GeneratorList() {
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
                return item.type === 'button' ? <GeneratorAddButton/> : <Piece piece={item}/>
            }}
            /> 
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