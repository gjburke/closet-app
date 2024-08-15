import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import PieceAdder from '../components/closet/clothes/PieceAdder'
import TabNavigtor from './TabNavigator';
import PieceScreen from './../screens/PieceScreen'
import { PieceType } from '../components/closet/clothes/clothesSlice'
import { OutfitType } from '../components/closet/outfits/outfitSlice';
import OutfitView from '../screens/OutfitScreen'
import GeneratorPieceAdder from '../components/generator/GeneratorPieceAdder';
import OutfitAdder from '../components/closet/outfits/OutfitAdder';

export type RootStackParams = {
  Tabs: undefined;
  AddPiece: undefined;
  PieceScreen: {
    piece: PieceType;
  };
  OutfitView: {
    outfit: OutfitType;
  };
  GeneratorPieceAdder: undefined;
  OutfitAdder: undefined;
} 

const RootStack = createStackNavigator<RootStackParams>();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen options={{ headerShown: false }} name="Tabs" component={TabNavigtor}/>
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen options={{ title: "Add Piece" }} name="AddPiece" component={PieceAdder}/>
          <RootStack.Screen options={{ title: "Piece" }} name="PieceScreen" component={PieceScreen}/>
          <RootStack.Screen options={{ title: "Outfit" }} name="OutfitView" component={OutfitView}/>
          <RootStack.Screen options={{ title: "Add Piece to Outfit" }} name="GeneratorPieceAdder" component={GeneratorPieceAdder}/>
          <RootStack.Screen options={{ title: "Add Outfit" }} name="OutfitAdder" component={OutfitAdder}/>
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
