import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ProductsCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      style={styles.shadowBlack}
      onPress={() => navigation.navigate("Product", item)}
    >
      <View className="ml-4 items-center justify-end bg-gray-300 rounded-lg p-4 relative">
        {item.sameDayDelivery && (
          <View className="px-2 py-1 rounded-full mb-3 bg-white">
            <Text className="text-green-600 font-semibold text-xs">
              Same Day Delivery
            </Text>
          </View>
        )}

        <Image className="bg-contain w-32 h-32" source={item.image} />
        <View>
          <Text className="capitalize">{item.name}</Text>
          <Text className="font-bold">{item.price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export const styles = StyleSheet.create({
  shadowBlack: {
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 7,

    elevation: 3,
  },
});
