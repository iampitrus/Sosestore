import { View, Text } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";

export default function CardPayment({ color }) {
  return (
    <View
      style={{ backgroundColor: color }}
      className="rounded-3xl mr-4 w-72 p-4"
    >
      <View className="flex-row justify-between">
        <Text className="text-white text-3xl">VISA</Text>
        <Icon.CheckCircle
          height={30}
          width={30}
          fill={"white"}
          stroke={"pink"}
        />
      </View>
      <View className="my-6">
        <Text className="text-white text-xl">**** **** **** 1921</Text>
      </View>
      <View className="flex-row justify-between">
        <Icon.CreditCard height={30} width={30} stroke={"white"} />
        <Text className="text-white text-lg">07/25</Text>
      </View>
    </View>
  );
}
