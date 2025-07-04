import { Tabs } from "expo-router";
import { ChartColumn, Home } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

function TabIcon({ focused, icon: Icon, title }: any) {
  if (focused) {
    return (
      <View className="flex flex-row w-full flex-1 min-w-[200px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden bg-background-primary">
        <Icon color="#fb923c" size={20} />
        <Text className="ml-2 text-base font-semibold text-primary-400">
          {title}
        </Text>
      </View>
    );
  }

  return (
    <View className="items-center justify-center mt-4 rounded-full size-full">
      <Icon color="#64748b" size={20} />
    </View>
  );
}

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#f8fafc",
          borderRadius: 50,
          position: "absolute",
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#e2e8f0",
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon(props) {
            return <TabIcon {...props} icon={Home} title="Home" />;
          },
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon(props) {
            return <TabIcon {...props} icon={ChartColumn} title="Analytics" />;
          },
        }}
      />
    </Tabs>
  );
};

export default _layout;
