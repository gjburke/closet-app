import { StyleSheet, Pressable, Text } from 'react-native'

export default function AddButton() {
    return (
        <Pressable style={styles.addButton}>
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