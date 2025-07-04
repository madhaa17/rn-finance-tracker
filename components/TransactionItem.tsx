import { ArrowDownLeft, ArrowUpRight } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

interface TransactionItemProps {
  title: string;
  category: string;
  amount: number;
  type: "income" | "expense";
  date: string;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
  title,
  category,
  amount,
  type,
  date,
}) => {
  return (
    <View className="flex-row items-center justify-between py-4 border-b border-border-light">
      <View className="flex-row items-center flex-1">
        <View
          className={`w-10 h-10 rounded-full items-center justify-center mr-3 ${
            type === "income" ? "bg-success-100" : "bg-error-100"
          }`}>
          {type === "income" ? (
            <ArrowUpRight size={16} color="#22c55e" />
          ) : (
            <ArrowDownLeft size={16} color="#ef4444" />
          )}
        </View>
        <View className="flex-1">
          <Text className="text-text-primary font-semibold">{title}</Text>
          <Text className="text-text-secondary text-sm">{category}</Text>
        </View>
      </View>
      <View className="items-end">
        <Text
          className={`font-bold ${
            type === "income" ? "text-success-500" : "text-error-500"
          }`}>
          {type === "income" ? "+" : "-"}Rp{" "}
          {Math.abs(amount).toLocaleString("id-ID")}
        </Text>
        <Text className="text-text-tertiary text-xs">{date}</Text>
      </View>
    </View>
  );
};
