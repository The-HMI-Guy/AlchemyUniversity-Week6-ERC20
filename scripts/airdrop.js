const hre = require("hardhat");
const CONTRACT_ADDR = "0x6Cc7973EA1947E5e84Fa9548CA22bb4E150C1Ac3";

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
