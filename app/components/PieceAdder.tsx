import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";

export default function PieceAdder() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>This is the piece adder</Text>
            <Pressable> 
                <Text>Add Piece</Text>
            </Pressable>
        </View>
    );
}