/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{vue,js,ts}",
    "./app/components/**/*.{vue,js,ts}",
    "./app/pages/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        kufi: ['"Noto Kufi Arabic"', "sans-serif"],
        alexandria: ["Alexandria", "sans-serif"],
      },
      colors: {
        marine: {
          50: "#f0f8fa", // أبيض مزرق خفيف جداً
          100: "#dcf0f5", // خلفيات ناعمة
          200: "#bde1ea",
          300: "#90cade",
          400: "#5eaecd",
          500: "#3f90b1", // لون متوسط التشبع ومريح
          600: "#337695",
          700: "#2c607a",
          800: "#265065",
          900: "#003049", // لونك الأساسي (كحلي عميق)
          950: "#001b2b", // لونك الأساسي (الخلفية الداكنة جداً)
        },
        sand: {
          50: "#fcf9f5", // كريمي فاتح جداً
          100: "#f7f1e6",
          200: "#efe0cb",
          300: "#e3cbaa",
          400: "#d7b186",
          500: "#d4a373", // لونك الأساسي (الذهبي/الرملي)
          600: "#c28753",
          700: "#a26b42",
          800: "#845738",
          900: "#6a472f",
          950: "#3d2719", // بني داكن ممتاز للتباين
        },
      },
    },
  },

  plugins: [],
};
