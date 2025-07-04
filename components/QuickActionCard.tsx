import { LucideIcon } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface QuickActionCardProps {
  icon: LucideIcon;
  title: string;
  color: string;
  onPress: () => void;
}

export const QuickActionCard: React.FC<QuickActionCardProps> = ({
  icon: Icon,
  title,
  color,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 p-4 bg-white rounded-2xl shadow-card mx-1"
      style={{ elevation: 2 }}>
      <View
        className={`w-12 h-12 rounded-full items-center justify-center mb-3 ${color}`}>
        <Icon size={20} color="#ffffff" />
      </View>
      <Text className="text-text-primary font-semibold text-sm">{title}</Text>
    </TouchableOpacity>
  );
};
