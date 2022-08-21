// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const deployer = await hre.ethers.getSigner(hre.network.config.from);
  console.log("Deploying...", deployer.address);
  console.log("Account Balance", (await deployer.getBalance()).toString());
  const Lock = await hre.ethers.getContractFactory("AuthenticationContract");
  const lock = await Lock.connect(deployer).deploy();
  console.log("Lock Address", lock.address);
  console.log("Contract Owner:", deployer);
  // await lock.deployed();

  console.log("Lock with 1 ETH deployed to:", lock.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
