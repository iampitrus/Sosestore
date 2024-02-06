import { View, Text } from "react-native";
import React from "react";

export default function Logo() {
  return (
    <View className="rounded-full bg-green-600 text-white outline-1 outline outline-offset-2 outline-green-600 px-6 py-3 flex items-center justify-center">
      <Text className="text-5xl font-bold text-white">SoSe</Text>
    </View>
  );
}
