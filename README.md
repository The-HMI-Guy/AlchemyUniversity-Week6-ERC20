# Fantasy Football Token

This repository contains the source code for the Fantasy Football Token (FFT) smart contract, which is built on the Ethereum blockchain using Solidity. The FFT contract is an ERC20 token contract that allows for the creation and management of a fantasy football token.

## Contract Details

- Solidity version: 0.8.0
- SPDX-License-Identifier: MIT

## Prerequisites

To run this code, you need the following:

- Node.js installed on your local machine
- Hardhat installed globally (`npm install -g hardhat`)
- OpenZeppelin Contracts library (`@openzeppelin/contracts`) installed as a dependency

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/fantasy-football-token.git
   ```

2. Install the dependencies:

   ```bash
   cd fantasy-football-token
   npm install
   ```

3. Compile the contracts:

   ```bash
   npx hardhat compile
   ```

## Usage

### Deploying the Fantasy Football Token

To deploy the Fantasy Football Token contract, use the `deploy.js` script:

```bash
npx hardhat run scripts/deploy.js
```

The script will deploy the contract using the specified account and display the token's address once it has been deployed.

### Airdropping Tokens

To airdrop tokens to an address, use the `airdrop` function in the Fantasy Football Token contract. You can interact with the contract through a web3 provider or by using the provided script.

Update the `scripts/airdrop.js` script with the recipient's address and the desired token amount, then run the script:

```bash
npx hardhat run scripts/airdrop.js
```

The script will check the sender's balance, transfer the specified amount of tokens to the recipient, and display the transaction hash once the airdrop is complete.

## License

This code is released under the MIT License. Please see the [LICENSE](LICENSE) file for more details.
