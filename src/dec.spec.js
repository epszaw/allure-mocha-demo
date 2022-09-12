const { it } = require("mocha")
const { expect } = require("chai")
const dec = require("./dec")

it("decrements the given value", () => {
	expect(dec(5)).eq(4)
})
