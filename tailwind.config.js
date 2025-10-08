  /** @type {import('tailwindcss').Config} */
  const config = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#F7C73C",
            light: "#3B82F6",
            dark: "#1E40AF",
          },
          secondary: {
            DEFAULT: "#BB7218",
          },
          tertiary:{
            DEFAULT: "#06386D",
          },
          neutral: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            700: "#374151",
            900: "#111827",
          },
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          title: ["Oswald", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  
  export default config;
