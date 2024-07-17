# Smart Contract

This project demonstrates the use of `require()`, `assert()`, and `revert()` statements in a Solidity Smart Contract. These statements are used for error handling and ensuring that certain conditions are met before executing specific functions.

## Smart Contract
The contract includes three functions:
1. **deposit()**: Uses `require()` to validate input.
2. **doubleBalance()**: Uses `assert()` to check for invariants.
3. **withdraw()**: Uses `revert()` to revert the transaction under certain conditions.


## Features
- **Deposit and Withdraw Functionality**: Users can deposit and withdraw tokens securely.
- **Balance Doubling Feature**: Allows users to double their current balance.
- **Error Handling**: Provides clear error messages for insufficient balances and other issues.

## Usage

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/n-ikitasingh/Smart-Contact.git
   
2. **Install Dependencies**

   Inside the project directory, in the terminal type:

   ```bash
   npm i
   ```
### Usage
1. **Compile the Contracts**

   ```bash
   truffle compile
   ```
2. **Start the Truffle development environment**

   ```bash
   truffle develop
   ```
3. **Deploy the Contract**

   ```bash
   truffle migrate
   ``` 
4. **Interact with the contract**

   ```bash
   truffle exec interact.js
   ```   

## Authors
Nikita Singh
[Nikita Singh](https://www.linkedin.com/in/nikita-singh-08318924b)

## License
This project is licensed under the MIT License - see the LICENSE.md file for the details.
