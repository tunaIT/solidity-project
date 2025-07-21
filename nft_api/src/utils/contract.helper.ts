import { ethers } from 'ethers';
import {MyNFT} from '../abi/MyNFT';
import * as dotenv from 'dotenv';
dotenv.config();

export function getContract() {
  const rpcUrl = process.env.RPC_URL!;
  const privateKey = process.env.PRIVATE_KEY!;
  const contractAddress = process.env.CONTRACT_ADDRESS!;

  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, MyNFT.abi, wallet);

  return contract;
}
