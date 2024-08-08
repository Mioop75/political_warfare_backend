import { Module } from '@nestjs/common';
import { ImprovesService } from './improves.service';
import { ImprovesController } from './improves.controller';

@Module({
  controllers: [ImprovesController],
  providers: [ImprovesService],
})
export class ImprovesModule {}
