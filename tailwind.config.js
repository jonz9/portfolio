// tailwind.config.js
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				accent: {
					DEFAULT: "hsl(var(--accent))",
					light: "hsl(var(--accent-light))",
					dark: "hsl(var(--accent-dark))",
				},
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
				border: "hsl(var(--border))",
				ring: "hsl(var(--ring))",
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				space: ["Space Grotesk", "system-ui", "sans-serif"],
				mono: ["Space Mono", "monospace"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
