//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FantasyFootballToken is ERC20 {
    uint256 constant _initialSupply = 100 * (10**18);

    mapping(address => uint256) public balances;

    constructor() ERC20("FantasyFootballToken", "FFT") {
        _mint(msg.sender, _initialSupply);
        balances[msg.sender] = _initialSupply;
    }

    function decreaseBalance(uint256 _amount) internal {
        balances[msg.sender] -= _amount;
    }

    function increaseBalance(address _to, uint256 _amount) internal {
        balances[_to] += _amount;
    }

    function airdrop(address _to, uint256 _amount) external {
        require(balances[msg.sender] >= _amount, "Not enough tokens to send!");
        decreaseBalance(_amount);
        increaseBalance(_to, _amount);
    }
}
