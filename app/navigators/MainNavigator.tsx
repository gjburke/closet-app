import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import PieceAdder from './../components/PieceAdder'
import TabNavigtor from './TabNavigator';
import PieceScreen from './../screens/PieceScreen'

export type RootStackParams = {
  Tabs: undefined;
  AddPiece: undefined;
  PieceScreen: {
    id: string;
  };
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
          <RootStack.Screen options={{ title: "Piece"}} name="PieceScreen" component={PieceScreen}/>
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
