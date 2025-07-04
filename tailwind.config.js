/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c", // Main Orange
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },

        // Secondary Colors
        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8", // Main Blue
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },

        // Success/Income Colors
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80", // Main Green
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },

        // Error/Expense Colors
        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171", // Main Red
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },

        // Warning Colors
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24", // Main Yellow
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },

        // Neutral/Gray Colors
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },

        // Accent Colors for Categories
        accent: {
          teal: {
            50: "#f0fdfa",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf", // Main Teal
            500: "#14b8a6",
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
          },
          purple: {
            50: "#faf5ff",
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc", // Main Purple
            500: "#a855f7",
            600: "#9333ea",
            700: "#7c3aed",
            800: "#6b21a8",
            900: "#581c87",
          },
          pink: {
            50: "#fdf2f8",
            100: "#fce7f3",
            200: "#fbcfe8",
            300: "#f9a8d4",
            400: "#f472b6", // Main Pink
            500: "#ec4899",
            600: "#db2777",
            700: "#be185d",
            800: "#9d174d",
            900: "#831843",
          },
          lime: {
            50: "#f7fee7",
            100: "#ecfccb",
            200: "#d9f99d",
            300: "#bef264",
            400: "#a3e635", // Main Lime
            500: "#84cc16",
            600: "#65a30d",
            700: "#4d7c0f",
            800: "#3f6212",
            900: "#365314",
          },
        },

        // Background Colors
        background: {
          primary: "#ffffff",
          secondary: "#f8fafc",
          tertiary: "#f1f5f9",
          dark: "#0f172a",
        },

        // Text Colors
        text: {
          primary: "#1e293b",
          secondary: "#64748b",
          tertiary: "#94a3b8",
          inverse: "#ffffff",
        },

        // Border Colors
        border: {
          light: "#e2e8f0",
          medium: "#cbd5e1",
          dark: "#64748b",
        },
      },

      // Custom Gradients
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #fb923c 0%, #f97316 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
        "gradient-success": "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)",
        "gradient-error": "linear-gradient(135deg, #f87171 0%, #ef4444 100%)",
        "gradient-teal": "linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%)",
        "gradient-purple": "linear-gradient(135deg, #c084fc 0%, #a855f7 100%)",
        "gradient-pink": "linear-gradient(135deg, #f472b6 0%, #ec4899 100%)",
        "gradient-lime": "linear-gradient(135deg, #a3e635 0%, #84cc16 100%)",

        // Card Gradients
        "card-orange": "linear-gradient(135deg, #fb923c 0%, #ea580c 100%)",
        "card-blue": "linear-gradient(135deg, #38bdf8 0%, #0369a1 100%)",
        "card-green": "linear-gradient(135deg, #4ade80 0%, #15803d 100%)",
        "card-red": "linear-gradient(135deg, #f87171 0%, #b91c1c 100%)",
        "card-teal": "linear-gradient(135deg, #2dd4bf 0%, #0f766e 100%)",
        "card-purple": "linear-gradient(135deg, #c084fc 0%, #7c3aed 100%)",
      },

      // Custom Shadows
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        button: "0 2px 4px -1px rgba(0, 0, 0, 0.1)",
        modal:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "inner-light": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      },

      // Custom Border Radius
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      // Custom Spacing
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        42: "10.5rem",
        46: "11.5rem",
        50: "12.5rem",
        54: "13.5rem",
        58: "14.5rem",
        62: "15.5rem",
        66: "16.5rem",
        70: "17.5rem",
        74: "18.5rem",
        78: "19.5rem",
        82: "20.5rem",
        86: "21.5rem",
        90: "22.5rem",
        94: "23.5rem",
        98: "24.5rem",
      },

      // Custom Font Sizes
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },

      // Custom Font Weights
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },

      // Custom Transitions
      transitionDuration: {
        150: "150ms",
        200: "200ms",
        250: "250ms",
        350: "350ms",
        400: "400ms",
        450: "450ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1200: "1200ms",
        1500: "1500ms",
      },

      // Custom Animations
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.3s ease-out",
        slideDown: "slideDown 0.3s ease-out",
        slideLeft: "slideLeft 0.3s ease-out",
        slideRight: "slideRight 0.3s ease-out",
        scaleIn: "scaleIn 0.2s ease-out",
        "bounce-gentle": "bounce-gentle 2s infinite",
        "pulse-slow": "pulse 3s infinite",
      },

      // Custom Keyframes
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },

      // Custom Backdrop Blur
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "32px",
      },
    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
};
