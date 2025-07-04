import { mockUserData } from "@/lib/mocks";
import { LogOut } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Header = () => {
  const handleLogout = () => {
    console.log("Logout pressed");
  };

  return (
    <View className="flex-row items-center justify-between mb-6">
      <View>
        <Text className="text-text-secondary">{mockUserData.greeting}</Text>
        <Text className="text-text-primary font-bold text-xl">
          {mockUserData.name}
        </Text>
      </View>

      <TouchableOpacity
        className="w-12 h-12 bg-white rounded-2xl items-center justify-center shadow-card"
        onPress={handleLogout}>
        <LogOut size={20} color="#64748b" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
