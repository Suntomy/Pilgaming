const { Wallet } = require("ethers");

function createWallet() {
    const wallet = Wallet.createRandom();

    return {
        address: wallet.address,
        wallet
    };
}

async function signMessage(wallet, message) {
    if (!wallet || typeof wallet.signMessage !== "function") {
        throw new Error("Invalid wallet");
    }

    return wallet.signMessage(message);
}

module.exports = {
    createWallet,
    signMessage
};
