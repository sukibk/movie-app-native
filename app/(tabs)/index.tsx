import { Text, View } from "react-native";
import React from "react";

export default function index() {
  return (
    <View className="flex-1 bg-light-bg dark:bg-dark-bg">
      <Text className="text-red-500 font-bold">Hey I am on index</Text>
    </View>
  );
}
