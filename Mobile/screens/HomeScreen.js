import { View, Text, TextInput, ScrollView } from "react-native";
import Hero from "../components/Hero";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import Category from "../components/Category";
import { featured } from "../constants";
import FeaturedRow from "../components/FeaturedRow";
import TabNavigation from "../components/TabNavigation";

export default function App() {
  return (
    <SafeAreaView className="bg-gray-200">
      {/* search */}
      <ScrollView>
        <View className="flex-row my-6 items-center space-x-2 px-4 pb-2">
          <View className="flex-row flex-1 items-center p-3 rounded-full bg-white">
            <Icon.Search height="25" width="25" stroke="gray" />
            <TextInput placeholder="Search products" className="ml-2 flex-1" />
          </View>
          {/* notification */}
          <View className="bg-white rounded-full p-3 relative">
            <Icon.Bell height="25" width="25" stroke="gray" />
            <View className="w-4 h-4 bg-orange-600 rounded-full absolute top-0 right-0"></View>
          </View>
        </View>
        <Hero />
        <Category />

        {/* featured */}
        <View className="mt-5">
          {featured.map((item) => {
            return (
              <FeaturedRow
                key={item.id}
                title={item.title}
                products={item.products}
              />
            );
          })}
        </View>
        <TabNavigation />
      </ScrollView>
    </SafeAreaView>
  );
}
