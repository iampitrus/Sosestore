import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoginButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
      className="bg-white rounded-full px-5 py-2 w-full "
    >
      <Text className="text-green-500 text-2xl text-center">LOG IN</Text>
    </TouchableOpacity>
  );
}
