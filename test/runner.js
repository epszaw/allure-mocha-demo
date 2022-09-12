const path = require("path");
const glob = require("glob");
const Mocha = require("mocha");
const Allure = require("allure-mocha");

const mocha = new Mocha({
	timeout: 16000,
	reporter: "mocha-multi-reporters",
	parallel: true,
	reporterOptions: {
		reporterEnabled: "list, allure-mocha",
		allureMochaReporterOptions: {
			resultsDir: path.resolve(__dirname, "../allure-results"),
		},
	},
});

glob.sync("src/**/*.spec.js").forEach((file) => mocha.addFile(file));
mocha.run((failures) => process.exit(failures === 0 ? 0 : 1));
