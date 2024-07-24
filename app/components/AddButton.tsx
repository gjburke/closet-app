import { StyleSheet, Pressable, Text } from 'react-native'
import { addPiece, PieceType } from './clothesSlice';
import { useAppDispatch } from '../hooks';

const samplePiece: PieceType = {
  id: '1',
  name: 'the rodgers',
  type: 'shorts', 
  size: 'big as hell',
  color: 'blue',
};

export default function AddButton() {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(addPiece(samplePiece));
  }

  return (
    <Pressable style={styles.addButton} onPress={handleClick}>
      <Text>This is the adding button</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  addButton: {
    width: 175,
    height: 175,
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});