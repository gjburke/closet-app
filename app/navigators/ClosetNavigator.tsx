import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ClothesScreen from './../screens/ClothesScreen' 
import OutfitScreen from '../screens/OutfitsScreen'

const Tab = createMaterialTopTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Clothes" component={ClothesScreen}/>
        <Tab.Screen name="Outfits" component={OutfitScreen}/>
    </Tab.Navigator>
  );
}