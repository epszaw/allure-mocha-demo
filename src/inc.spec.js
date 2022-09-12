const { it } = require("mocha")
const { expect } = require("chai")
const inc = require("./inc")

it("increments the given value", () => {
	expect(inc(5)).eq(6)
})