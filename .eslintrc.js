module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"react-app", // create-react-app의 기본 ESLint 설정 적용
		"plugin:react/recommended", // React 권장 규칙
	],
	plugins: ["react"],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: "detect", // 설치된 React 버전을 자동으로 감지
		},
	},
	rules: {
		"jsx-quotes": "off",
		"react/react-in-jsx-scope": "off",
		"react/no-unescaped-entities": "off",
		"react/jsx-uses-react": "error", // JSX 사용 시 react가 필요하다고 인식
	},
};
