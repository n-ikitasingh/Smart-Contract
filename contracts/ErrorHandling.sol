// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ErrorHandling {
    uint256 public balance;

    // Function using require()
    function deposit(uint256 amount) public {
        require(amount > 0, "Amount must be greater than zero");
        balance += amount;
    }

    // Function using assert()
    function doubleBalance() public {
        uint256 oldBalance = balance;
        balance *= 2;
        assert(balance == oldBalance * 2);
    }

    // Function using revert()
    function withdraw(uint amount) public {
    require(balance >= amount, "Insufficient balance");
    balance -= amount;
}
}
