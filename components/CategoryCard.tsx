import React from "react";
import { Text, View } from "react-native";

interface CategoryCardProps {
  title: string;
  amount: string;
  percentage: string;
  color: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  amount,
  percentage,
  color,
}) => {
  return (
    <View
      className="bg-white rounded-2xl p-4 shadow-card mr-4"
      style={{ width: 140, elevation: 2 }}>
      <View className={`w-8 h-8 rounded-full ${color} mb-3`} />
      <Text className="text-text-primary font-semibold text-sm mb-1">
        {title}
      </Text>
      <Text className="text-text-primary font-bold text-lg">Rp {amount}</Text>
      <Text className="text-text-tertiary text-xs">
        {percentage}% dari total
      </Text>
    </View>
  );
};
