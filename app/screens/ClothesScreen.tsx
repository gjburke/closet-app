import { Pressable, StyleSheet, Text, View } from "react-native";
import ClothesList from "../components/ClothesList";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>This is the clothes tab</Text>
      <ClothesList/>
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