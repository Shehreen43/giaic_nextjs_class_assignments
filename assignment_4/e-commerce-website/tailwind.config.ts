import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        integral: ['"Integral CF"', 'sans-serif'],
      },
      maxWidth: {
        xs: '20rem', // 320px
        sm: '24rem', // 384px
        md: '28rem', // 448px
        lg: '32rem', // 512px (default)
        xl: '36rem', // 576px
        '2xl': '42rem', // 672px
        'custom-size': '50rem', // 800px (Custom size)
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
      },
      animation: {
        rotate: 'rotate 1s linear',
        pulse: 'pulse 2s ease-in-out infinite', // Customize duration and easing
      },
      
    },
  },
  plugins: [],
} satisfies Config;
