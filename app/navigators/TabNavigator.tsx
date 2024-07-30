import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClosetNavigator from './ClosetNavigator'
import GeneratorScreen from './../screens/GeneratorScreen'

const BottomTab = createBottomTabNavigator();

export default function TabNavigtor() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Closet" component={ClosetNavigator} />
            <BottomTab.Screen name="Outfit Generator" component={GeneratorScreen} />
        </BottomTab.Navigator>
    );
}