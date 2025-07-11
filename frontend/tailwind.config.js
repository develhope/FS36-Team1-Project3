/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"my-dark": {
					purple: { 100: "#E9E1FF", 200: "#CBB9FF", 300: "#A88BFF" },
					yellow: { 100: "#FFFBDA", 200: "#FFF5A8", 300: "#FFEF78" },
					blue: { 100: "#CBE5FF", 200: "#8AC3FF", 300: "#53A7FF" },
					pink: { 100: "#FFB4BE", 200: "#FF8D9C", 300: "#FF7083" },
					danger: "#FF426E",
					warning: "#FF904B",
					success: "#61E87C",
				},
				"my-light": {
					purple: { 100: "#DED2FF", 200: "#BEA8FF", 300: "#A283FF" },
					yellow: { 100: "#FFF8C2", 200: "#FFF292", 300: "#FFED67" },
					blue: { 100: "#C1DFFF", 200: "#76B9FF", 300: "#3492F4" },
					pink: { 100: "#FFA3AF", 200: "#FE7B8D", 300: "#FF5B71" },
					danger: "#FF2054",
					warning: "#FF8234",
					success: "#36CB54",
				},
				"my-black": "#080825",
				"my-white": "#FBFBFF",
				"my-disabled": "#CECADA",
			},
		},
	},
	plugins: [],
}
