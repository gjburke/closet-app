import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';

export default function PieceAdder() {
    const navigation = useNavigation();

    return (
        <View style={ styles.container }>
            <AddablePieceList/>
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