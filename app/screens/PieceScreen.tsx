import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParams } from '../navigators/MainNavigator';

type Props = NativeStackScreenProps<RootStackParams, "PieceScreen">;

export default function PieceScreen({ route, navigation }: Props) {
    return (
        <View style={ styles.container }>
            <Text>This is the piece screen</Text>
            <Text>The id for the piece is: { route.params.id }</Text>
            <Pressable onPress={() => navigation.goBack()}>
              <Text>GO BACK</Text>
            </Pressable>
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