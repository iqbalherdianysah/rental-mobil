/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#C05F31",
				section: "#C05F31",
				"grey-text": "#686868",
				secondary: "#000000",
			},
			container: {
				center: true,
				padding: "1rem",
			},
		},
	},
	plugins: [],
};
