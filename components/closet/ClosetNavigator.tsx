import { StyleSheet, View, useWindowDimensions } from 'react-native'
import { TabBar, TabView, SceneMap } from 'react-native-tab-view' 
import ClothesScreen from "./ClothesScreen"
import OutfitScreen from "./OutfitScreen"
import { useState } from 'react';

export default function ClosetTabs() {
  const layout = useWindowDimensions();
  
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'clothes', title: 'Clothes'},
    { key: 'outfits', title: 'Outfits'},
  ]); 

  const renderScene = SceneMap({
    clothes: ClothesScreen,
    outfits: OutfitScreen,
  })

  const renderTabBar = (props) => (
  	<TabBar
     	 {...props}
      	activeColor={'white'}
      	inactiveColor={'black'}
          style={{marginTop:25,backgroundColor:'red'}}
  	/>
  );
  
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene} 
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});