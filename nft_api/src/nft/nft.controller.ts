import { Controller, Get, Post, Query } from '@nestjs/common';
import { NftService } from './nft.service';

@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @Get('supply')
  totalSupply() {
    return this.nftService.totalSupply();
  }

  @Post('mint')
  mint(@Query('to') to: string) {
    return this.nftService.mintOne(to);
  }

  @Post('batch')
  batch(@Query('to') to: string, @Query('amount') amount: string) {
    return this.nftService.batchMint(to, Number(amount));
  }
  
}
