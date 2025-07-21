import { Injectable } from '@nestjs/common';
import { getContract } from '../utils/contract.helper';

@Injectable()
export class NftService {
  private contract = getContract();

  async totalSupply(): Promise<number> {
    const result = await this.contract.totalSupply();
    return Number(result);
  }

  async mintOne(to: string) {
    if (!this.isValidEthereumAddress(to)) {
      throw new Error('Invalid Ethereum address');
    }
    const tx = await this.contract.mint(to);
    await tx.wait();
    return tx.hash;
  }

  async batchMint(to: string, amount: number) {
    const tx = await this.contract.batchMint(to, amount);
    await tx.wait();
    return tx.hash;
  }

   isValidEthereumAddress(address: string): boolean {
    // Địa chỉ phải bắt đầu bằng "0x" và theo sau là 40 ký tự hex (0-9, a-f, A-F)
    const regex = /^0x[a-fA-F0-9]{40}$/;
    return regex.test(address);
}
}
