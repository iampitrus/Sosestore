import { View, Text, ScrollView } from "react-native";
import React from "react";

export default function Category() {
  const categories = ["MamaGold", "HoneyWell", "Dangote", "Bua", "GoldenPenny"];
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="overflow-visible"
      contentContainerStyle={{ paddingHorizontal: 15 }}
    >
      {categories.map((item, index) => (
        <View
          key={index}
          className="border border-gray-300 bg-white ml-2 px-4 rounded-full py-2"
        >
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
