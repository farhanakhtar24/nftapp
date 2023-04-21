/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				eclipse: "url(../../src/assets/Ellipse 206.svg)",
			},
			colors: {
				bgColor: "#1E1E1E",
			},
		},
	},
	plugins: [require("daisyui")],
};
