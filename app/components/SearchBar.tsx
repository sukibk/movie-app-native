import { View, Text, TextInput, useColorScheme } from "react-native";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react-native";
import { useRouter } from "expo-router";
import {
  useSharedValue,
  withTiming,
  interpolateColor,
  useAnimatedReaction,
  runOnJS,
} from "react-native-reanimated";

const SearchBar = () => {
  const router = useRouter();

  const colorScheme = useColorScheme();

  const progress = useSharedValue(colorScheme === "dark" ? 1 : 0);
  const [iconColor, setIconColor] = useState("#808080");
  const [placeholderColor, setPlaceholderColor] = useState("#808080");

  useAnimatedReaction(
    () => progress.value,
    (val) => {
      const interpolated = interpolateColor(
        val,
        [0, 1],
        ["#808080", "#412be4"]
      );
      runOnJS(setIconColor)(interpolated);
    },
    [progress]
  );

  useAnimatedReaction(
    () => progress.value,
    (val) => {
      const interpolated = interpolateColor(
        val,
        [0, 1],
        ["#808080", "#7d8bae"]
      );
      runOnJS(setPlaceholderColor)(interpolated);
    }
  );

  useEffect(() => {
    progress.value = withTiming(colorScheme === "dark" ? 1 : 0, {
      duration: 2500,
    });
  }, [colorScheme]);

  return (
    <View className="flex-row items-center bg-modal-light-bg dark:bg-modal-dark-bg rounded-full px-5 py-4 transition-colors duration-500">
      <Search color={iconColor} />
      <TextInput
        onPress={() => {}}
        placeholder="Search..."
        value=""
        onChangeText={() => {}}
        placeholderTextColor={placeholderColor}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
