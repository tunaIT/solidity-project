require("@nomicfoundation/hardhat-toolbox");

const { vars } = require("hardhat/config");

// Thay bằng khóa API Infura thực tế của bạn
const INFURA_API_KEY = vars.get("INFURA_API_KEY", "15c95792af744aaca94fbb66a40dcf6a");

// Thay bằng khóa riêng Sepolia thực tế của bạn
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY", "ce65d0093544e12317fee156c185d6dcd2f30257d2ee6403d71bd104fc937241");

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};