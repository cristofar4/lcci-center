import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        ink: {
          950: "#05070D",
          900: "#0A0E1A",
          800: "#0F1421",
          700: "#141A28",
        },
        charcoal: {
          900: "#0E1117",
          800: "#13161C",
          700: "#1B202B",
          600: "#262C39",
        },
        gold: {
          200: "#F1E2BE",
          300: "#E7CE97",
          400: "#D6B26B",
          500: "#C9A24B",
          600: "#A9863A",
          700: "#85692C",
        },
        ivory: "#F4F1E9",
        mist: "#A9B0BE",
        slate: "#6B7385",
        // shadcn-style semantic tokens (HSL via CSS vars)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      fontSize: {
        display: ["clamp(3.5rem, 8vw, 8.25rem)", { lineHeight: "0.96", letterSpacing: "-0.03em" }],
        h1: ["clamp(2.75rem, 5.5vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        h2: ["clamp(2rem, 3.6vw, 3.5rem)", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        h3: ["clamp(1.5rem, 2.2vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.3em" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      maxWidth: {
        content: "1320px",
        prose: "68ch",
      },
      backgroundImage: {
        "gold-sheen": "linear-gradient(120deg, #E7CE97 0%, #D6B26B 38%, #C9A24B 64%, #E7CE97 100%)",
        "ink-radial": "radial-gradient(120% 120% at 50% 0%, #141A28 0%, #0A0E1A 45%, #05070D 100%)",
        "grid-faint":
          "linear-gradient(to right, rgba(214,178,107,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(214,178,107,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(214,178,107,0.18), 0 30px 80px -30px rgba(201,162,75,0.35)",
        panel: "0 40px 120px -40px rgba(0,0,0,0.85)",
        "gold-soft": "0 20px 60px -25px rgba(201,162,75,0.5)",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.7, 0, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        kenburns: {
          "0%": { transform: "scale(1.05) translate3d(0, 0, 0)" },
          "100%": { transform: "scale(1.18) translate3d(-1.5%, -1.2%, 0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 38s linear infinite",
        float: "float 7s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.6s cubic-bezier(0.16,1,0.3,1) infinite",
        kenburns: "kenburns 18s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
