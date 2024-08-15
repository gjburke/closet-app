import { Image, View, Pressable, StyleSheet, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { ItemProps } from './GeneratorList';
import { useAppDispatch } from '../../hooks';
import { deletePiece } from './generatorSlice';

export default function GeneratorPiece( { piece }: ItemProps) {
  const dispatch = useAppDispatch();

  function remove() {
    dispatch(deletePiece(piece.name));
  }

  return (
      <View>
          <View style={styles.piece}>
              <Text>This is a piece of clothing with name: {piece.name}!</Text>
              <Image source={ (() => {
                  if (!piece.image_uri) {
                    return require('./../../../assets/splash.png');
                  } else {
                    return { uri: piece.image_uri };
                  }
                })()
              } style={ styles.image }/>
              <Pressable onPress={remove}>
                <Text>Remove Piece</Text>
              </Pressable>
          </View>
      </View>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  piece: {
    width: windowWidth * 0.45,
    height: windowWidth * 0.45,
    backgroundColor: 'blue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  image: {
    height: 50,
    width: 50,
  },
});