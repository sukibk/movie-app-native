import React from "react";
import { Tabs } from "expo-router";
import { Download, House, Search, UserCog } from "lucide-react-native";
import TabIcon from "@/app/components/TabIcon";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={House}
              label="Home"
              size={24}
              color={focused ? "white" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={Search}
              label="Search"
              size={24}
              color={focused ? "white" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={Download}
              label="Saved"
              size={24}
              color={focused ? "white" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={UserCog}
              label="Profile"
              size={24}
              color={focused ? "white" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
