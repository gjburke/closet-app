import { StyleSheet, Text, View } from "react-native";
import Generator from "../components/Generator";

export default function Index() {
  return (
    <View
      style={ styles.container }
    >
      <Text>This is the outfit generator tab</Text>
      <Generator/>
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