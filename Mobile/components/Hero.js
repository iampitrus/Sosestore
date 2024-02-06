import {
  View,
  Text,
  Button,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
export default function Hero() {
  return (
    <View>
      <View className="rounded-3xl mx-4 bg-green-600">
        <Image
          className="w-full rounded-3xl"
          source={require("../assets/images/bgphoto1.png")}
        />

        <View className="absolute flex-1 left-0 right-0 top-7 mx-auto flex flex-col items-center">
          <Text className="text-orange-300 text-4xl italic font-semibold ">
            Sose Sales App
          </Text>
          <Text className="font-bold mt-4 text-white text-3xl">
            Best <Text className="text-lg">DSCNT</Text> Wholesale
          </Text>
          <TouchableOpacity className="px-4 py-2  bg-white rounded-full">
            <Text className="uppercase text-green-600 font-bold">
              Delivery Available
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text className="text-gray-500 w-full text-center">
          24/7 All Year Round sales of Everything Food in Nigeria
        </Text>
      </View>
    </View>
  );
}
