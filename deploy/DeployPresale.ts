import { DeployFunction } from "hardhat-deploy/types"
import { ethers } from "hardhat"
import { HardhatRuntimeEnvironment } from "hardhat/types"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const [deployer] = await ethers.getSigners()

	const contractBalance = await ethers.provider.getBalance(deployer)

	console.log("Deployer Balance:", ethers.formatEther(contractBalance), "ETH")

	console.log("Deployer", deployer.address)
	const ethUsdAggregatorAddress = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419"
	const usdtAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7"

	await hre.deployments.deploy("BrandPresale", {
		from: deployer.address,
		args: [ethUsdAggregatorAddress, usdtAddress, 0],
		log: true,
	})
}
export default func
func.tags = ["presale"]
