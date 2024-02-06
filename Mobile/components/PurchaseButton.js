import { View, Text, TouchableOpacity } from "react-native";

export default function PurchaseButton() {
  return (
    <TouchableOpacity className="flex-1 bg-green-600 rounded-full mt-4 py-3">
      <Text className="text-center text-white text-2xl">Finalize Purchase</Text>
    </TouchableOpacity>
  );
}
