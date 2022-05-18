import { HardhatUserConfig, task } from "hardhat/config"
import { SoloDefault } from 'thor-builtin'

import 'hardhat-thor-plugin'

task('accounts', 'print', async (_, hre) => {
	if(!hre.thor.ethers) {
		await hre.thor.connect()
	}

	if(!hre.thor.ethers) {
		throw new Error('Failed to connect')
	}

	const signers = await hre.thor.ethers.getSigners()

	for (const signer of signers) {
		console.log(await signer.getAddress())
	}

	hre.thor.close()
})

const config: HardhatUserConfig = {
	solidity: "0.8.4",
	thor: {
		url: 'http://127.0.0.1:8669',
		privateKeys: SoloDefault.privKeys
	}
};

export default config;
