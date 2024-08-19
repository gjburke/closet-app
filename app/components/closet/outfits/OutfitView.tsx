import { StyleSheet, View, Text } from 'react-native';
import { ItemProps } from '../../../screens/OutfitScreen';
import PiecesList from './PiecesList';

export default function OutfitView({ outfit }: ItemProps) {
    return (
        <View style={ styles.container }>
            <Text>This is the outfit view</Text>
            <Text>The name for the outfit is: { outfit.name }</Text>
            <PiecesList/>
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