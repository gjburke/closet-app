import { useState } from 'react';
import { StyleSheet, Pressable, Text } from 'react-native'
import { addPiece, PieceType } from './clothesSlice';
import { useAppDispatch } from '../hooks';
import {Dimensions} from 'react-native';

const samplePiece: PieceType = {
  id: '1',
  name: 'the rodgers',
  type: 'shorts', 
  size: 'big as hell',
  color: 'blue',
};

export default function AddButton() {
  const dispatch = useAppDispatch();
  const [id, setID] = useState(0);

  function handleClick() {
    setID(id => id + 1);
    dispatch(addPiece({...samplePiece, id: String(id)}));
  }

  return (
    <Pressable style={styles.addButton} onPress={handleClick}>
      <Text>This is the adding button</Text>
    </Pressable>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  addButton: {
    width: windowWidth * 0.45,
    height: windowWidth * 0.45,
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});