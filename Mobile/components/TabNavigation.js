import { View, Text } from "react-native";
import * as Icon from "react-native-feather";

export default function TabNavigation() {
  return (
    <View className=" w-full rounded-tr-[50px] flex-row items-center justify-around rounded-tl-[50px] bg-white py-10">
      <View className="bg-pink-100 flex-row gap-4 items-center justify-center rounded-full px-3 py-1">
        <Icon.Home height="25" width="25" stroke="green" />
        <Text className="text-green-600 text-lg">Home</Text>
      </View>
      <View>
        <Icon.ShoppingBag height="25" width="25" stroke="grey" />
      </View>
      <View>
        <Icon.Heart height="25" width="25" stroke="grey" />
      </View>
      <View>
        <Icon.Percent height="25" width="25" stroke="grey" />
      </View>
    </View>
  );
}
