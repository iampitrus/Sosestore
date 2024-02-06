import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import * as Icon from "react-native-feather";
import { SafeAreaView } from "react-native-safe-area-context";
import CardPayment from "../components/CardPayment";
import PurchaseButton from "../components/PurchaseButton";

export default function CheckoutScreen() {
  const { params } = useRoute();
  let item = params;

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView className="w-full h-full px-4 py-4">
        <View className="relative ">
          <View className="flex-row absolute top-14 left-4  items-center gap-6">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="bg-white p-2 rounded-full"
            >
              <Icon.ArrowLeft strokeWidth={1} stroke={"gray"} />
            </TouchableOpacity>
            <Text className="text-lg text-gray-600">Checkout</Text>
          </View>
        </View>
        <View className="mt-32 items-center">
          <View className="flex-row gap-4">
            <Image className="w-24 h-24" source={item.image} />
            <View className="justify-around">
              <Text className="text-gray-600 text-2xl">{item.name}</Text>
              <Text className="text-green-600 text-2xl font-bold">
                {item.price}
              </Text>
            </View>
          </View>
        </View>

        {/* shipping method */}

        <View className="my-6">
          <Text className="text-gray-600 text-xl">Shipping method</Text>
          <View className="rounded-full bg-gray-600 p-1 flex-row">
            <View className="bg-white w-[55%] rounded-full py-3">
              <Text className="text-center text-gray-600">Shop delivery</Text>
            </View>
            <View className="bg-transparent rounded-full justify-center py-3 flex-1">
              <Text className="text-center text-white">Pick up in store</Text>
            </View>
          </View>
        </View>

        {/* select payment method */}
        <View className="py-4">
          <Text className="text-gray-600 text-lg">
            Select your payment method
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible"
            contentContainerStyle={{ paddingHorizontal: 4 }}
          >
            <CardPayment color={"pink"} />
            <CardPayment color={"purple"} />
          </ScrollView>
          <Text className="text-gray-600 text-lg">+ Add new</Text>
        </View>

        {/* other options */}
        <View className="flex-row gap-2">
          <View className="flex-row border rounded-lg border-gray-300 py-2 px-3 gap-1">
            <Icon.Play height={30} width={30} stroke={"orange"} />
            <Text className="text-2xl text-gray-600">Pay</Text>
          </View>
          <View className="flex-row border rounded-lg border-gray-300 py-2 px-3 gap-1">
            <Icon.Play height={30} width={30} stroke={"orange"} />
            <Text className="text-2xl text-gray-600">Pay</Text>
          </View>
          <View className="flex-row border rounded-lg border-gray-300 py-2 px-3 gap-1">
            <Icon.PlayCircle height={30} width={30} stroke={"orange"} />
            <Text className="text-2xl text-gray-600">Pay</Text>
          </View>
        </View>

        {/* costs */}
        <View className="w-full mt-6 rounded-tr-[50px] rounded-tl-[50px] bg-white py-8 px-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-500 text-lg">Subtotal (2 items)</Text>
            <Text className="text-gray-500 text-lg">N 71,499</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-500 text-lg">Logistics cost</Text>
            <Text className="text-gray-500 text-lg">N 5000</Text>
          </View>
          <View className="flex-row justify-between mt-4">
            <Text className="text-gray-500 text-lg font-bold">Total</Text>
            <Text className="text-gray-500 text-lg font-bold">N 76,499</Text>
          </View>

          {/* purchase now! */}
          <PurchaseButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
