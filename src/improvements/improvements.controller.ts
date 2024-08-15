import { UserDto } from '@/users/dto/user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BuyImprovementDto, ImprovementsWithTypesDto } from './improvement.dto';
import { ImprovementsService } from './improvements.service';

@Controller('improvements')
export class ImprovementsController {
  constructor(private readonly improvementsService: ImprovementsService) {}

  @Get()
  async getAll() {
    const improvements = await this.improvementsService.getAll();

    return plainToInstance(ImprovementsWithTypesDto, improvements);
  }

  @Post('buy-improvement')
  async buyImprovement(@Body() dto: BuyImprovementDto) {
    const purchasedImprovement =
      await this.improvementsService.buyImprovement(dto);

    return plainToInstance(UserDto, purchasedImprovement);
  }
}
