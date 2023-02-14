const hre = require("hardhat");
const ERC20_ADDR = "0x2F57645A7d740c9bF4cEbaE523e95f7f158bA878"; //FFT Address
const BUCKET_ADDR = "0x873289a1aD6Cf024B927bd13bd183B264d274c68";
const BUCKET_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "drop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
async function main() {
  const [deployer] = await ethers.getSigners();
  const AMOUNT = ethers.utils.parseUnits("50", "ether"); // total amount to spend
  const ERC20 = await hre.ethers.getContractAt(
    "FantasyFootballToken",
    ERC20_ADDR
  );
  const tx = await ERC20.approve(BUCKET_ADDR, AMOUNT);
  await tx.wait();
  console.log("Transaction:", tx.hash);

  const contract = new ethers.Contract(BUCKET_ADDR, BUCKET_ABI, deployer);

  const tx2 = await contract.drop(ERC20_ADDR, AMOUNT);
  await tx2.wait();
  console.log("Transaction:", tx.hash);

  console.log("Completed.");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
