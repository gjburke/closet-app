import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParams } from '../navigators/MainNavigator';
import { OutfitType } from './../components/closet/outfits/outfitSlice';
import OutfitView from '../components/closet/outfits/OutfitView';

export type ItemProps = { outfit: OutfitType }
type Props = NativeStackScreenProps<RootStackParams, "OutfitView">;

export default function OutfitScreen({ route, navigation }: Props) {
  const outfit = route.params.outfit;
  const [isEditing, setIsEditing] = useState(false);
  
  if (isEditing) {
    return (
      <View>

      </View>
    );
  } else {
    return (
      <View>
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