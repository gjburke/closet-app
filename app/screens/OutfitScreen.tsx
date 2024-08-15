import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParams } from '../navigators/MainNavigator';

type Props = NativeStackScreenProps<RootStackParams, "OutfitView">;

export default function OutfitScreen({ route, navigation }: Props) {
  const outfit = route.params.outfit;
  
  return (
    <View style={ styles.container }>
      <Text>This is the outfit screen</Text>
      <Text>The name for the outfit is: { outfit.name }</Text>
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