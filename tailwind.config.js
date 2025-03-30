// tailwind.config.js
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				accent: "var(--accent)",
				"accent-light": "var(--accent-light)",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				title: ["Space Grotesk", "sans-serif"],
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
