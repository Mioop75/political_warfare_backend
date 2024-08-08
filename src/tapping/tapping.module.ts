import { Module } from '@nestjs/common';
import { TappingService } from './tapping.service';
import { TappingGateway } from './tapping.gateway';

@Module({
  providers: [TappingGateway, TappingService],
})
export class TappingModule {}
