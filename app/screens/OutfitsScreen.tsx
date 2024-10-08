import { StyleSheet, Text, View } from "react-native";
import OutfitList from "../components/closet/outfits/OutfitList";

export default function OutfitsScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the outfits tab</Text>
      <OutfitList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});