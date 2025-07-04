import Header from "@/components/Header";
import {
  BarChart3,
  Target,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react-native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  careerProgression,
  getFinancialSummary,
  mockCategoryData,
  mockStatsData,
} from "../../lib/mocks";

const StatsCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  color,
  trend,
}: any) => (
  <View className="p-4 mb-4 bg-white rounded-2xl shadow-card">
    <View className="flex-row items-center justify-between mb-2">
      <View
        className={`w-10 h-10 rounded-full items-center justify-center ${color}`}>
        <Icon size={18} color="#ffffff" />
      </View>
      {trend && (
        <View
          className={`flex-row items-center px-2 py-1 rounded-full ${
            trend.startsWith("+") ? "bg-success-100" : "bg-error-100"
          }`}>
          {trend.startsWith("+") ? (
            <TrendingUp size={12} color="#22c55e" />
          ) : (
            <TrendingDown size={12} color="#ef4444" />
          )}
          <Text
            className={`text-xs ml-1 font-semibold ${
              trend.startsWith("+") ? "text-success-600" : "text-error-600"
            }`}>
            {trend}
          </Text>
        </View>
      )}
    </View>
    <Text className="mb-1 text-2xl font-bold text-text-primary">{value}</Text>
    <Text className="text-sm text-text-secondary">{title}</Text>
    {subtitle && (
      <Text className="mt-1 text-xs text-text-tertiary">{subtitle}</Text>
    )}
  </View>
);

const BarChart = ({ data, title }: any) => {
  const maxValue = Math.max(...data.map((item: any) => item.value));

  return (
    <View className="p-5 mb-6 bg-white rounded-2xl shadow-card">
      <Text className="mb-5 text-lg font-bold text-text-primary">{title}</Text>
      <View className="space-y-4">
        {data.map((item: any, index: number) => (
          <View key={index} className="space-y-2">
            <View className="flex-row items-center justify-between">
              <Text className="text-sm font-medium text-text-secondary">
                {item.label}
              </Text>
              <Text className="text-sm font-bold text-text-primary">
                Rp {(item.value / 1000000).toFixed(1)}M
              </Text>
            </View>
            <View className="flex-row items-center">
              <View className="flex-1 h-8 overflow-hidden rounded-lg bg-neutral-100">
                <View
                  className={`h-full rounded-lg ${item.color} flex-row items-center justify-end pr-3`}
                  style={{
                    width: `${Math.max((item.value / maxValue) * 100, 8)}%`,
                  }}>
                  <Text className="text-xs font-semibold text-white">
                    {Math.round((item.value / maxValue) * 100)}%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Summary */}
      <View className="pt-4 mt-6 border-t border-neutral-200">
        <View className="flex-row items-center justify-between">
          <Text className="text-sm text-text-secondary">Net Income</Text>
          <Text className="text-lg font-bold text-success-600">
            Rp{" "}
            {(
              ((data[0]?.value || 0) - (data[1]?.value || 0)) /
              1000000
            ).toFixed(1)}
            M
          </Text>
        </View>
        <View className="flex-row items-center justify-between mt-2">
          <Text className="text-sm text-text-secondary">Savings Rate</Text>
          <Text className="font-bold text-primary-600">
            {Math.round(
              (((data[0]?.value || 0) - (data[1]?.value || 0)) /
                (data[0]?.value || 1)) *
                100
            )}
            %
          </Text>
        </View>
      </View>
    </View>
  );
};

const CategoryPieChart = ({ data, title }: any) => {
  const total = data.reduce((sum: number, item: any) => sum + item.value, 0);

  return (
    <View className="p-5 mb-6 bg-white rounded-2xl shadow-card">
      <Text className="mb-4 text-lg font-bold text-text-primary">{title}</Text>

      {/* Simple pie representation with bars */}
      <View className="space-y-3">
        {data.map((item: any, index: number) => (
          <View key={index} className="flex-row items-center justify-between">
            <View className="flex-row items-center flex-1">
              <View className={`w-4 h-4 rounded-full ${item.color} mr-3`} />
              <Text className="flex-1 text-sm text-text-secondary">
                {item.label}
              </Text>
            </View>
            <View className="items-end">
              <Text className="font-bold text-text-primary">
                {Math.round((item.value / total) * 100)}%
              </Text>
              <Text className="text-xs text-text-tertiary">
                Rp {(item.value / 1000).toFixed(0)}K
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const ProgressBar = ({ label, current, target, color }: any) => {
  const progress = Math.min((current / target) * 100, 100);

  return (
    <View className="mb-4">
      <View className="flex-row items-center justify-between mb-2">
        <Text className="text-sm text-text-secondary">{label}</Text>
        <Text className="font-semibold text-text-primary">
          {Math.round(progress)}%
        </Text>
      </View>
      <View className="h-3 overflow-hidden rounded-full bg-neutral-200">
        <View
          className={`h-full rounded-full ${color}`}
          style={{ width: `${progress}%` }}
        />
      </View>
      <View className="flex-row justify-between mt-1">
        <Text className="text-xs text-text-tertiary">
          Rp {current.toLocaleString("id-ID")}
        </Text>
        <Text className="text-xs text-text-tertiary">
          Target: Rp {target.toLocaleString("id-ID")}
        </Text>
      </View>
    </View>
  );
};

const stats = () => {
  const financialSummary = getFinancialSummary();

  const incomeVsExpenseData = [
    {
      label: "Pemasukan",
      value: mockStatsData.income.amount,
      color: "bg-success-500",
    },
    {
      label: "Pengeluaran",
      value: mockStatsData.expense.amount,
      color: "bg-error-500",
    },
    {
      label: "Investasi",
      value: 800000,
      color: "bg-primary-500",
    },
  ];

  const categoryExpenseData = mockCategoryData.map((category, index) => ({
    label: category.title,
    value: parseInt(category.amount.replace(/\./g, "")) * 1000,
    color: category.color,
  }));

  const savingsGoals = [
    {
      label: "Emergency Fund (6 bulan)",
      current: financialSummary.currentBalance,
      target: mockStatsData.expense.amount * 6,
      color: "bg-success-500",
    },
    {
      label: "Investment Goal (100M)",
      current: financialSummary.currentBalance,
      target: 100000000,
      color: "bg-primary-500",
    },
  ];

  const monthlyTrends = [
    { month: "Jan", income: 12000000, expense: 4200000 },
    { month: "Feb", income: 13000000, expense: 4500000 },
    { month: "Mar", income: 14500000, expense: 4800000 },
    { month: "Apr", income: 16000000, expense: 4900000 },
    { month: "Mei", income: 17500000, expense: 5100000 },
    { month: "Jun", income: 18000000, expense: 4964000 },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background-secondary">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="px-6 pt-4 pb-6">
          <Header />
          <View className="mb-6">
            <Text className="mb-2 text-2xl font-bold text-text-primary">
              Statistik Keuangan
            </Text>
            <Text className="text-text-secondary">
              Analisis mendalam keuangan Anda
            </Text>
          </View>

          {/* Key Metrics */}
          <View className="grid grid-cols-2 gap-4 mb-6">
            <StatsCard
              title="Savings Rate"
              value={`${Math.round(financialSummary.savingsRate)}%`}
              subtitle="Dari total pendapatan"
              icon={Target}
              color="bg-success-500"
              trend="+5.2%"
            />
            <StatsCard
              title="Net Worth"
              value={`Rp ${Math.round(financialSummary.currentBalance / 1000000)}M`}
              subtitle="Total aset bersih"
              icon={Wallet}
              color="bg-primary-500"
              trend="+19.4%"
            />
            <StatsCard
              title="Monthly Growth"
              value={`${Math.round(financialSummary.monthlyGrowth)}%`}
              subtitle="Pertumbuhan bulanan"
              icon={TrendingUp}
              color="bg-secondary-500"
              trend="+22.8%"
            />
            <StatsCard
              title="Investment Ratio"
              value="4.4%"
              subtitle="Dari total pendapatan"
              icon={BarChart3}
              color="bg-accent-purple-500"
              trend="+1.2%"
            />
          </View>

          {/* Income vs Expense Chart */}
          <BarChart
            data={incomeVsExpenseData}
            title="Pemasukan vs Pengeluaran"
          />

          {/* Category Breakdown */}
          <CategoryPieChart
            data={categoryExpenseData}
            title="Breakdown Pengeluaran per Kategori"
          />

          {/* Savings Goals */}
          <View className="p-5 mb-6 bg-white rounded-2xl shadow-card">
            <Text className="mb-4 text-lg font-bold text-text-primary">
              Target Tabungan
            </Text>
            {savingsGoals.map((goal, index) => (
              <ProgressBar
                key={index}
                label={goal.label}
                current={goal.current}
                target={goal.target}
                color={goal.color}
              />
            ))}
          </View>

          {/* Monthly Trends */}
          <View className="p-5 mb-6 bg-white rounded-2xl shadow-card">
            <Text className="mb-4 text-lg font-bold text-text-primary">
              Tren 6 Bulan Terakhir
            </Text>
            <View className="space-y-4">
              {monthlyTrends.map((month, index) => (
                <View
                  key={index}
                  className="flex-row items-center justify-between">
                  <Text className="w-12 text-sm text-text-secondary">
                    {month.month}
                  </Text>
                  <View className="flex-row items-center flex-1 ml-4">
                    <View className="flex-1">
                      <View className="flex-row justify-between mb-1">
                        <Text className="text-xs text-success-600">Income</Text>
                        <Text className="text-xs font-semibold text-success-600">
                          {Math.round(month.income / 1000000)}M
                        </Text>
                      </View>
                      <View className="h-2 mb-2 overflow-hidden rounded-full bg-success-100">
                        <View
                          className="h-full rounded-full bg-success-500"
                          style={{
                            width: `${(month.income / 20000000) * 100}%`,
                          }}
                        />
                      </View>
                      <View className="flex-row justify-between">
                        <Text className="text-xs text-error-600">Expense</Text>
                        <Text className="text-xs font-semibold text-error-600">
                          {Math.round(month.expense / 1000000)}M
                        </Text>
                      </View>
                      <View className="h-2 overflow-hidden rounded-full bg-error-100">
                        <View
                          className="h-full rounded-full bg-error-500"
                          style={{
                            width: `${(month.expense / 20000000) * 100}%`,
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Career Progression */}
          <View className="p-5 mb-6 bg-white rounded-2xl shadow-card">
            <Text className="mb-4 text-lg font-bold text-text-primary">
              Progres Karir
            </Text>
            <View className="space-y-4">
              <View className="flex-row items-center justify-between p-3 bg-success-50 rounded-xl">
                <View>
                  <Text className="font-semibold text-success-700">
                    Tahun 1
                  </Text>
                  <Text className="text-sm text-success-600">
                    {careerProgression.year1.position}
                  </Text>
                </View>
                <View className="items-end">
                  <Text className="font-bold text-success-700">
                    Rp{" "}
                    {Math.round(
                      careerProgression.year1.averageSalary / 1000000
                    )}
                    M
                  </Text>
                  <Text className="text-xs text-success-600">
                    Rata-rata gaji
                  </Text>
                </View>
              </View>

              <View className="flex-row items-center justify-between p-3 bg-primary-50 rounded-xl">
                <View>
                  <Text className="font-semibold text-primary-700">
                    Saat Ini
                  </Text>
                  <Text className="text-sm text-primary-600">
                    {careerProgression.current.position}
                  </Text>
                </View>
                <View className="items-end">
                  <Text className="font-bold text-primary-700">
                    Rp{" "}
                    {Math.round(
                      careerProgression.current.averageSalary / 1000000
                    )}
                    M
                  </Text>
                  <Text className="text-xs text-primary-600">
                    Gaji saat ini
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default stats;
