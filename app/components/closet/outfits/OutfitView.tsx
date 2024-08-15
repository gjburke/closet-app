import { StyleSheet, View, Text, Pressable } from 'react-native';
import { ItemProps } from '../../../screens/OutfitScreen';

export default function OutfitView({ outfit }: ItemProps) {
    return (
        <View style={ styles.container }>
            <Text>This is the outfit screen</Text>
            <Text>The name for the outfit is: { outfit.name }</Text>
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