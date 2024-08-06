import { StyleSheet, Text, View } from "react-native";
import OutfitList from "../components/OutfitList";

export default function Index() {
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