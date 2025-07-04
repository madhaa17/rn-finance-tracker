import Header from "@/components/Header";
import {
  ArrowDownLeft,
  ArrowUpRight,
  CreditCard,
  TrendingUp,
} from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BalanceCard,
  CategoryCard,
  QuickActionCard,
  TransactionItem,
} from "../../components";
import {
  mockBalanceData,
  mockCategoryData,
  mockStatsData,
  mockTransactionData,
} from "../../lib/mocks";

export default function Index() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-background-secondary">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="px-6 pt-4 pb-6">
          <Header />

          <View className="mb-6">
            <BalanceCard
              title={mockBalanceData.title}
              balance={mockBalanceData.balance}
              cardNumber={mockBalanceData.cardNumber}
              type={mockBalanceData.type}
              gradient={mockBalanceData.gradient}
              showBalance={showBalance}
              onToggleBalance={() => setShowBalance(!showBalance)}
            />
          </View>

          <View className="bg-white rounded-2xl p-5 shadow-card mb-6">
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-text-secondary font-semibold">
                Total Saldo
              </Text>
              <View className="flex-row items-center bg-success-100 rounded-full px-3 py-1">
                <TrendingUp size={14} color="#22c55e" />
                <Text className="text-success-600 text-sm ml-1">
                  {mockStatsData.overallGrowth}
                </Text>
              </View>
            </View>
            <Text className="text-text-primary text-2xl font-bold mb-2">
              Rp{" "}
              {showBalance
                ? mockStatsData.totalBalance.toLocaleString("id-ID")
                : "••••••••"}
            </Text>
            <Text className="text-text-tertiary text-sm">
              Tabungan bulan ini
            </Text>
          </View>

          <View className="mb-6">
            <Text className="text-text-primary font-bold text-lg mb-4">
              Aksi Cepat
            </Text>
            <View className="flex-row">
              <QuickActionCard
                icon={ArrowUpRight}
                title="Tambah Pemasukan"
                color="bg-success-500"
                onPress={() => {}}
              />
              <QuickActionCard
                icon={ArrowDownLeft}
                title="Tambah Pengeluaran"
                color="bg-error-500"
                onPress={() => {}}
              />
              <QuickActionCard
                icon={CreditCard}
                title="Transfer"
                color="bg-secondary-500"
                onPress={() => {}}
              />
            </View>
          </View>

          <View className="flex-row mb-6">
            <View className="flex-1 bg-white rounded-2xl p-4 shadow-card mr-3">
              <Text className="text-text-secondary text-sm mb-1">
                Pemasukan
              </Text>
              <Text className="text-success-500 font-bold text-xl">
                Rp {mockStatsData.income.amount.toLocaleString("id-ID")}
              </Text>
              <Text className="text-text-tertiary text-xs">
                {mockStatsData.income.growth} dari bulan lalu
              </Text>
            </View>
            <View className="flex-1 bg-white rounded-2xl p-4 shadow-card">
              <Text className="text-text-secondary text-sm mb-1">
                Pengeluaran
              </Text>
              <Text className="text-error-500 font-bold text-xl">
                Rp {mockStatsData.expense.amount.toLocaleString("id-ID")}
              </Text>
              <Text className="text-text-tertiary text-xs">
                {mockStatsData.expense.growth} dari bulan lalu
              </Text>
            </View>
          </View>

          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-text-primary font-bold text-lg">
                Kategori Pengeluaran
              </Text>
              <TouchableOpacity>
                <Text className="text-primary-500 font-semibold">
                  Lihat Semua
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {mockCategoryData.map((category, index) => (
                <CategoryCard
                  key={index}
                  title={category.title}
                  amount={category.amount}
                  percentage={category.percentage}
                  color={category.color}
                />
              ))}
            </ScrollView>
          </View>

          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-text-primary font-bold text-lg">
                Transaksi Terbaru
              </Text>
              <TouchableOpacity>
                <Text className="text-primary-500 font-semibold">
                  Lihat Semua
                </Text>
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-2xl p-4 shadow-card">
              {mockTransactionData.map((transaction) => (
                <TransactionItem
                  key={transaction.id}
                  title={transaction.title}
                  category={transaction.category}
                  amount={transaction.amount}
                  type={transaction.type}
                  date={transaction.date}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
