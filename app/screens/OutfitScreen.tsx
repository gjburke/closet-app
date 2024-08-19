import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParams } from '../navigators/MainNavigator';
import { OutfitType, deleteOutfit } from './../components/closet/outfits/outfitSlice';
import OutfitView from '../components/closet/outfits/OutfitView';
import OutfitEditor from '../components/closet/outfits/OutfitEditor';
import { useDispatch } from 'react-redux';
import { clear } from '../components/generator/generatorSlice';

export type ItemProps = { outfit: OutfitType }
type Props = NativeStackScreenProps<RootStackParams, "OutfitScreen">;

export default function OutfitScreen({ route, navigation }: Props) {
  const outfit = route.params.outfit;
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  function edit() {
    setIsEditing(true);
  }
  function revert() {
    setIsEditing(false);
  }
  function remove() {
    dispatch(deleteOutfit(outfit.name));
    navigation.goBack();
  }

  // Will need to address this I think. Either through outfitView or outfitlist or something. 
  // Funky bug where this doesnt change even after editing, maybe some sort of rerender is not getting triggered
  // Etiher that or the store is not editing the outfit properly, resulting in some sort of duplication
  // Most likely its a result of passing the piece as props in the list. Mayb eneed to rerender the list or something
  
  if (isEditing) {
    return (
      <View style={ styles.container }>
        <Pressable onPress={remove}>
          <Text>Delete Outfit</Text>
        </Pressable>
        <Pressable onPress={revert}>
          <Text>Revert Changes</Text>
        </Pressable>
        <OutfitEditor outfit={outfit}/>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={ styles.container }>
        <Pressable onPress={edit}>
          <Text>Edit Outfit</Text>
        </Pressable>
        <OutfitView outfit={outfit}/>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});