const ErrorHandling = artifacts.require("ErrorHandling");

const interactWithContract = async () => {
    try {
        const accounts = await web3.eth.getAccounts();
        const instance = await ErrorHandling.deployed();

        // Deposit, double, and withdraw
        await instance.deposit(5, { from: accounts[0] });
        console.log("Balance after deposit:", (await instance.balance()).toString());

        await instance.doubleBalance({ from: accounts[0] });
        console.log("Balance after doubling:", (await instance.balance()).toString());

        await instance.withdraw(5, { from: accounts[0] });
        console.log("Balance after withdrawal:", (await instance.balance()).toString());

        // Attempt to withdraw 10 units
        try {
            await instance.withdraw(10, { from: accounts[0] });
        } catch (error) {
            console.error("Error message:", error.message);
            console.log("Caught expected error: Insufficient balance");
        }

    } catch (error) {
        console.error("General error:", error);
    }
};

module.exports = callback => {
    interactWithContract().then(() => callback()).catch(callback);
};
