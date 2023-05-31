async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();

  console.log("Account balance:", await ethers.utils.formatEther(weiAmount));

  // make sure to replace the "FantasyFootballToken" reference with your own ERC-20 name!
  const Token = await ethers.getContractFactory("FantasyFootballToken");
  const token = await Token.deploy();
  await token.wait(); // wait for this to be mined.

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
