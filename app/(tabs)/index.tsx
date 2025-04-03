import { Image, ScrollView, useColorScheme, View } from "react-native";
import React, { useEffect } from "react";
import Fade from "@/assets/images/hero-fade1.png";
import Logo from "@/assets/images/logo.png";
import LogoLight from "@/assets/images/logo-light.png";
import SearchBar from "@/app/components/SearchBar";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function index() {
  const colorScheme = useColorScheme();
  const darkMode = colorScheme === "dark";

  const darkOpacity = useSharedValue(darkMode ? 1 : 0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      darkOpacity.value = withTiming(darkMode ? 1 : 0, { duration: 500 });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [darkMode]);

  const darkLogoStyle = useAnimatedStyle(() => ({
    opacity: darkOpacity.value,
  }));

  const lightLogoStyle = useAnimatedStyle(() => ({
    opacity: 1 - darkOpacity.value,
  }));

  // Make sure to always put transition-colors duration-500 on all components for smoother UI transition
  return (
    <View className="flex-1 bg-light-bg dark:bg-dark-bg transition-colors duration-500">
      {darkMode && (
        <Image
          source={Fade}
          className="absolute w-full z-0 opacity-[2%] rotate-180 top-[-150]"
        />
      )}
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <View className="w-20 h-16 mt-20 mb-5 mx-auto relative">
          <Animated.Image
            source={LogoLight}
            className="w-20 h-16 absolute"
            style={lightLogoStyle}
            resizeMode="contain"
          />
          <Animated.Image
            source={Logo}
            className="w-20 h-16 absolute"
            style={darkLogoStyle}
            resizeMode="contain"
          />
        </View>
        <SearchBar />
      </ScrollView>
    </View>
  );
}
