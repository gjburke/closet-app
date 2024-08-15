import { StyleSheet, View, Text } from 'react-native';
import { ItemProps } from '../../../screens/OutfitScreen';

export default function OutfitEditor({ outfit }: ItemProps) {
    return (
        <View style={ styles.container }>
            <Text>This is the outfit editor</Text>
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