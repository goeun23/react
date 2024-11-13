/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // 이 경로에 모든 컴포넌트를 포함
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}", // Flowbite 관련 파일들
	],
	theme: {
		extend: {},
	},
	plugins: [
		require("flowbite/plugin"), // Flowbite 플러그인 추가
	],
};
