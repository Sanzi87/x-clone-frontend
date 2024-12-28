import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xsm: '500px',
        sm: '600px',
        md: '690px',
        lg: '988px',
        xl: '1078px',
        xxl: '1265px',
      },
    },
  },
  plugins: [],
};
export default config;
