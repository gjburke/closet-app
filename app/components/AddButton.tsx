import { StyleSheet, Pressable, Text } from 'react-native'
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigators/MainNavigator';
import type { StackNavigationProp } from '@react-navigation/stack';  


export default function AddButton() {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  function handlePress() {
    navigation.navigate('AddPiece');
  }

  return (
    <Pressable style={styles.addButton} onPress={handlePress}>
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