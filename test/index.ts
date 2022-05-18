import { expect } from "chai"
import { thor } from "hardhat"

describe("Greeter", function () {
	before('Connecting', async function () {
		await thor.connect()
	})

	after('Disconnecting', function () {
		thor.close()
	})

	it("Should return the new greeting once it's changed", async function () {
		const ethers = thor.ethers
		expect(ethers).not.null

		const Greeter = await ethers!.getContractFactory("Greeter")
		const greeter = await Greeter.deploy("Hello, world!")
		await greeter.deployed()

		expect(await greeter.greet()).to.equal("Hello, world!")

		const setGreetingTx = await greeter.setGreeting("Hola, mundo!")

		// wait until the transaction is mined
		await setGreetingTx.wait()

		expect(await greeter.greet()).to.equal("Hola, mundo!")
	});
});
