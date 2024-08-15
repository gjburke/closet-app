import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParams } from '../navigators/MainNavigator';
import { OutfitType } from './../components/closet/outfits/outfitSlice';
import OutfitView from '../components/closet/outfits/OutfitView';
import OutfitEditor from '../components/closet/outfits/OutfitEditor';
import { useDispatch } from 'react-redux';
import { clear } from '../components/generator/generatorSlice';

export type ItemProps = { outfit: OutfitType }
type Props = NativeStackScreenProps<RootStackParams, "OutfitView">;

export default function OutfitScreen({ route, navigation }: Props) {
  const outfit = route.params.outfit;
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  function edit() {
    setIsEditing(true);
    dispatch(clear());
  }
  function revert() {
    setIsEditing(false);
    dispatch(clear());
  }
  
  if (isEditing) {
    return (
      <View style={ styles.container }>
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