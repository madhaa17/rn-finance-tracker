export interface BalanceData {
  title: string;
  balance: number;
  cardNumber: string;
  type: "bank" | "credit";
  gradient: string;
}

export interface TransactionData {
  id: string;
  title: string;
  category: string;
  amount: number;
  type: "income" | "expense";
  date: string;
}

export interface CategoryData {
  title: string;
  amount: string;
  percentage: string;
  color: string;
}

export interface StatsData {
  income: {
    amount: number;
    growth: string;
  };
  expense: {
    amount: number;
    growth: string;
  };
  totalBalance: number;
  overallGrowth: string;
  netIncome: number;
  previousBalance: number;
}

const calculateFinancialTotals = (transactions: TransactionData[]) => {
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const netIncome = totalIncome - totalExpense;

  return { totalIncome, totalExpense, netIncome };
};

export const mockTransactionData: TransactionData[] = [
  {
    id: "1",
    title: "Steam - Elden Ring",
    category: "Belanja (Game)",
    amount: -899000,
    type: "expense",
    date: "Hari ini",
  },
  {
    id: "2",
    title: "Gaji Pokok - Mid Developer",
    category: "Pemasukan",
    amount: 14000000, // Mid-level salary
    type: "income",
    date: "1 hari lalu",
  },
  {
    id: "3",
    title: "Grab - Ke Kantor",
    category: "Transportasi",
    amount: -35000,
    type: "expense",
    date: "1 hari lalu",
  },
  {
    id: "4",
    title: "Freelance Web Project",
    category: "Pemasukan",
    amount: 4000000, // Mid-level freelance rate
    type: "income",
    date: "2 hari lalu",
  },
  {
    id: "5",
    title: "Kost Premium",
    category: "Tempat Tinggal",
    amount: -2200000, // Reduced from apartment to premium kost
    type: "expense",
    date: "3 hari lalu",
  },
  {
    id: "6",
    title: "Superindo - Groceries",
    category: "Makan & Minum",
    amount: -320000, // Reduced groceries
    type: "expense",
    date: "3 hari lalu",
  },
  {
    id: "7",
    title: "H&M - Kemeja Kerja",
    category: "Belanja (Pakaian)",
    amount: -450000, // Reduced clothing budget
    type: "expense",
    date: "4 hari lalu",
  },
  {
    id: "8",
    title: "Listrik & WiFi",
    category: "Tempat Tinggal",
    amount: -350000, // Reduced utilities
    type: "expense",
    date: "5 hari lalu",
  },
  {
    id: "9",
    title: "Bensin & Parkir",
    category: "Transportasi",
    amount: -240000,
    type: "expense",
    date: "6 hari lalu",
  },
  {
    id: "10",
    title: "Makan di Mal",
    category: "Makan & Minum",
    amount: -180000, // Reduced dining out
    type: "expense",
    date: "1 minggu lalu",
  },
  {
    id: "11",
    title: "Laundry Kiloan",
    category: "Tempat Tinggal",
    amount: -70000,
    type: "expense",
    date: "1 minggu lalu",
  },
  {
    id: "12",
    title: "Netflix + Spotify",
    category: "Belanja (Hiburan)",
    amount: -120000,
    type: "expense",
    date: "1 minggu lalu",
  },
  {
    id: "13",
    title: "Gym Basic Plan",
    category: "Kesehatan",
    amount: -200000, // Reduced gym membership
    type: "expense",
    date: "1 minggu lalu",
  },
  {
    id: "14",
    title: "Investasi Reksa Dana",
    category: "Investasi",
    amount: -800000, // Significantly reduced investment to fit budget
    type: "expense",
    date: "2 minggu lalu",
  },
  {
    id: "15",
    title: "BPJS Kesehatan",
    category: "Kesehatan",
    amount: -100000, // Reduced health insurance
    type: "expense",
    date: "2 minggu lalu",
  },
];

const financialTotals = calculateFinancialTotals(mockTransactionData);

const previousBalance = 72000000;

const currentBalance = previousBalance + financialTotals.netIncome;

export const mockStatsData: StatsData = {
  income: {
    amount: financialTotals.totalIncome,
    growth: "+22.8%",
  },
  expense: {
    amount: financialTotals.totalExpense,
    growth: "+8.5%",
  },
  totalBalance: currentBalance,
  overallGrowth: "+19.4%",
  netIncome: financialTotals.netIncome,
  previousBalance: previousBalance,
};

export const mockBalanceData: BalanceData = {
  title: "Saldo Utama",
  balance: currentBalance,
  cardNumber: "4532 1234 5678 9012",
  type: "bank",
  gradient: "bg-primary-400",
};

const categoryTotals = {
  housing: mockTransactionData
    .filter((t) => t.category === "Tempat Tinggal" && t.type === "expense")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0),
  food: mockTransactionData
    .filter((t) => t.category === "Makan & Minum" && t.type === "expense")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0),
  transport: mockTransactionData
    .filter((t) => t.category === "Transportasi" && t.type === "expense")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0),
  shopping: mockTransactionData
    .filter((t) => t.category.includes("Belanja") && t.type === "expense")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0),
  health: mockTransactionData
    .filter((t) => t.category === "Kesehatan" && t.type === "expense")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0),
  investment: mockTransactionData
    .filter((t) => t.category === "Investasi" && t.type === "expense")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0),
};

export const mockCategoryData: CategoryData[] = [
  {
    title: "Tempat Tinggal",
    amount: (categoryTotals.housing / 1000).toFixed(0) + ".000",
    percentage: Math.round(
      (categoryTotals.housing / financialTotals.totalExpense) * 100
    ).toString(),
    color: "bg-accent-teal-400",
  },
  {
    title: "Belanja",
    amount: (categoryTotals.shopping / 1000).toFixed(0) + ".000",
    percentage: Math.round(
      (categoryTotals.shopping / financialTotals.totalExpense) * 100
    ).toString(),
    color: "bg-accent-purple-400",
  },
  {
    title: "Investasi",
    amount: (categoryTotals.investment / 1000).toFixed(0) + ".000",
    percentage: Math.round(
      (categoryTotals.investment / financialTotals.totalExpense) * 100
    ).toString(),
    color: "bg-accent-pink-400",
  },
  {
    title: "Makan & Minum",
    amount: (categoryTotals.food / 1000).toFixed(0) + ".000",
    percentage: Math.round(
      (categoryTotals.food / financialTotals.totalExpense) * 100
    ).toString(),
    color: "bg-accent-lime-400",
  },
];

export const mockUserData = {
  name: "Mika Mada",
  greeting: "Halo!",
  careerLevel: "Mid-Level Developer",
  workExperience: "1 tahun 6 bulan",
};

export const getFinancialSummary = () => {
  const totals = calculateFinancialTotals(mockTransactionData);
  return {
    ...totals,
    currentBalance,
    previousBalance,
    savingsRate: (totals.netIncome / totals.totalIncome) * 100,
    monthlyGrowth: ((totals.totalIncome - 10000000) / 10000000) * 100,
  };
};

export const careerProgression = {
  year1: {
    averageSalary: 8500000,
    totalSavings: 54000000,
    position: "Junior Developer",
  },
  current: {
    averageSalary: 14000000,
    totalSavings: 72000000,
    position: "Mid-Level Developer",
  },
};
