import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';

export default function PieceScreen() {
    const navigation = useNavigation();
    return (
        <View style={ styles.container }>
            <Text>This is the piece screen</Text>
            <Text>The id for the piece is: </Text>
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