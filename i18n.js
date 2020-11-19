const NextI18Next = require("next-i18next").default;
const path = require("path");

module.exports = new NextI18Next({
	otherLanguages: ["ko-KR", "en", "zh", "zh-TW"],
	localePath: path.resolve("./public/static/locales"),
	cleanCode: true,
	fallbackLng: "en",

	// Locize
	backend: {
		projectId: "8060db7d-5b16-49b9-82be-30cf650a7426",
		referenceLng: "ko-KR",
	},
	use: [require("i18next-locize-backend/cjs")],
});
