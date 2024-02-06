import { View, Text, ScrollView } from "react-native";
import React from "react";
import ProductsCard from "./ProductsCard";

export default function FeaturedRow({ title, products }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-2xl">{title}</Text>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible py-5"
      >
        {products.map((product, index) => (
          <ProductsCard item={product} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
