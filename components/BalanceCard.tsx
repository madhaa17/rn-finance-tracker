import { Building2, Eye, EyeOff, Wallet } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface BalanceCardProps {
  title: string;
  balance: number;
  cardNumber: string;
  type: "bank" | "credit";
  gradient?: string;
  showBalance: boolean;
  onToggleBalance: () => void;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({
  title,
  balance,
  cardNumber,
  type,
  gradient,
  showBalance,
  onToggleBalance,
}) => {
  return (
    <View className={`${gradient} rounded-3xl w-full p-6 mr-4 shadow-card`}>
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center">
          <View className="items-center justify-center w-10 h-10 mr-3 rounded-full bg-white/20">
            {type === "bank" ? (
              <Building2 size={18} color="#ffffff" />
            ) : (
              <Wallet size={18} color="#ffffff" />
            )}
          </View>
          <Text className="font-semibold text-white">{title}</Text>
        </View>
        <TouchableOpacity onPress={onToggleBalance}>
          {showBalance ? (
            <Eye size={20} color="#ffffff80" />
          ) : (
            <EyeOff size={20} color="#ffffff80" />
          )}
        </TouchableOpacity>
      </View>

      <View className="mb-4">
        <Text className="mb-2 text-sm text-white/80">Saldo Tersedia</Text>
        <Text className="text-3xl font-bold text-white">
          {showBalance ? `Rp ${balance.toLocaleString("id-ID")}` : "••••••••"}
        </Text>
      </View>

      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-xs text-white/60">Nomor Kartu</Text>
          <Text className="font-mono text-sm text-white">
            {showBalance ? cardNumber : "•••• •••• •••• ••••"}
          </Text>
        </View>
      </View>
    </View>
  );
};
