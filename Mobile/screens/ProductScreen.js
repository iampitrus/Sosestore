import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";

export default function ProductScreen() {
  const { params } = useRoute();
  let item = params;

  const navigation = useNavigation();

  return (
    <View className="h-full w-full">
      {/* icons */}
      <View className="relative">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-14 left-4 bg-white p-2 rounded-full"
        >
          <Icon.ArrowLeft strokeWidth={1} stroke={"gray"} />
        </TouchableOpacity>
        <View className="absolute top-14 right-4 flex-row gap-3">
          <TouchableOpacity className="rounded-full p-2 bg-white">
            <Icon.Heart strokeWidth={1} stroke={"gray"} />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full p-2 bg-white">
            <Icon.Share strokeWidth={1} stroke={"gray"} />
          </TouchableOpacity>
        </View>
      </View>

      {/* image */}

      <View className="items-center my-auto">
        <Image className="w-72 h-72" source={item.image} />
        <View className="gap-4 mb-4 flex-row">
          <View className="w-2 h-2 bg-gray-300 rounded-full"></View>
          <View className="w-6 h-2 bg-green-600 rounded-full"></View>
          <View className="w-2 h-2 bg-gray-300 rounded-full"></View>
        </View>
        <View className="flex-row gap-6">
          <View className="bg-white p-2 rounded-3xl">
            <Image className="w-20 h-20" source={item.image} />
          </View>
          <View className="bg-white p-2 rounded-3xl">
            <Image className="w-20 h-20" source={item.image} />
          </View>
          <View className="bg-white p-2 rounded-3xl">
            <Image className="w-20 h-20" source={item.image} />
          </View>
        </View>
      </View>

      {/* details of product */}
      <View className="w-full rounded-tr-[50px] rounded-tl-[50px] bg-white py-10 px-4">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="uppercase text-gray-400">same day delivery</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <Icon.Star height="25" width="25" fill="yellow" />
            <Text className="font-bold text-lg">
              {item.stars}{" "}
              <Text className="text-gray-400 text-sm">
                ({item.ratingNumber})
              </Text>
            </Text>
          </View>
        </View>
        <View className="mb-6">
          <Text className="text-3xl my-5">{item.name}</Text>
          <Text className="text-gray-400">{item.description}</Text>
          <View className="flex-row justify-between items-center">
            <Text className="text-3xl text-green-600">{item.price}</Text>
            <View className="flex-row gap-2">
              <View className="w-6 h-6 bg-gray-700 rounded-full"></View>
              <View className="w-6 h-6 bg-gray-300 rounded-full"></View>
              <View className="w-6 h-6 bg-gray-300 rounded-full"></View>
            </View>
          </View>
        </View>
        <View className="flex-row gap-5">
          <View className="flex-row items-center rounded-full border gap-3">
            <Icon.Minus height={20} width={20} stroke={"gray"} />
            <Text>1</Text>
            <Icon.Plus height={20} width={20} stroke={"gray"} />
          </View>

          {/* buy now button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Checkout", item)}
            className="flex-1 bg-green-600 text-center py-3 rounded-full"
          >
            <Text className="text-center text-lg text-white">Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
