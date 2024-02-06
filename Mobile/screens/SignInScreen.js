import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../components/Logo";
import { useNavigation } from "@react-navigation/native";
import LoginButton from "../components/LoginButton";

export default function SignInScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0, y: 0.8 }}
        colors={["#16a34a", "#ca8a04", "#16a34a"]}
        locations={[0.25, 0.5, 0.75]}
        style={styles.background}
      >
        <Logo />
        <Text className="text-3xl text-green-800 mt-2">SOSE APP</Text>
        <View className="absolute w-full bottom-5">
          <LoginButton />
          <View className="flex-row gap-2 mt-4 justify-center">
            <View className="h-2 w-2 bg-gray-200 rounded-full"></View>
            <View className="h-2 w-2 bg-gray-200 rounded-full"></View>
            <View className="h-2 w-4 bg-yellow-600 rounded-full"></View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text className="text-white text-right text-lg">Skip</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});
