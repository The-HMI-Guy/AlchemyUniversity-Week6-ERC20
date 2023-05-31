const hre = require("hardhat");
const CONTRACT_ADDR = "0x2F57645A7d740c9bF4cEbaE523e95f7f158bA878";

async function main() {
  const [deployer] = await ethers.getSigners();
  const contract = await hre.ethers.getContractAt(
    "FantasyFootballToken",
    CONTRACT_ADDR
  );
  const tx = await contract.airdrop(
    "0x0A97D385648de983130510Ab105d9fe628653Ab0",
    1
  );

  await tx.wait();
  console.log("Complete. Check etherscan!");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
