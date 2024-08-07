import { FlatList, StyleSheet, View} from 'react-native';
import { PieceType } from './clothesSlice';
import GeneratorAddPieceButton from './GeneratorAddPieceButton';
import GeneratorPiece from './GeneratorPiece';
import { useAppSelector } from "../hooks";

export type ItemProps = {
    piece: PieceType;
}

export default function GeneratorList() {
    const pieces = useAppSelector((state) => state.generator.pieces)
    const pieceButton: PieceType = {
        id: 'button',
        name: 'button',
        type: 'button', 
        size: 'button',
        color: 'button',
    };

    const DATA: PieceType[] = []
    pieces.forEach(val => DATA.push(Object.assign({}, val)));
    DATA.push(pieceButton)

    return (
        <View style={ styles.container }>
            <FlatList
            data={DATA}
            numColumns={2}
            renderItem={({item}) => {
                return item.type === 'button' ? <GeneratorAddPieceButton/> : <GeneratorPiece piece={item}/>
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