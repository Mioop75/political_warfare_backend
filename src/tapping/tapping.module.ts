import { PrismaService } from '@/prisma.service';
import { Module } from '@nestjs/common';
import { TappingGateway } from './tapping.gateway';
import { TappingService } from './tapping.service';

@Module({
  providers: [TappingGateway, TappingService, PrismaService],
})
export class TappingModule {}
