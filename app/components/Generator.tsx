import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import GeneratorList from './GeneratorList'
import GeneratorAddOutfitButton from './GeneratorAddOutfitButton';

export default function Generator() {
    return (
        <View style={ styles.container }>
            <GeneratorList/>
            <GeneratorAddOutfitButton/>
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