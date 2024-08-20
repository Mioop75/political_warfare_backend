import { AuthGuard } from '@/auth/auth.guard';
import { UserDto } from '@/users/dto/user.dto';
import { CurrentUser } from '@/users/user.decorator';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BuyImprovementDto, ImprovementsWithTypesDto } from './improvement.dto';
import { ImprovementsService } from './improvements.service';

@Controller('improvements')
export class ImprovementsController {
  constructor(private readonly improvementsService: ImprovementsService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll() {
    const improvements = await this.improvementsService.getAll();

    return plainToInstance(ImprovementsWithTypesDto, improvements);
  }

  @UseGuards(AuthGuard)
  @Post('buy-improvement')
  async buyImprovement(
    @CurrentUser('uuid') uuid: string,
    @Body() dto: BuyImprovementDto,
  ) {
    const purchasedImprovement = await this.improvementsService.buyImprovement(
      uuid,
      dto,
    );

    return plainToInstance(UserDto, purchasedImprovement);
  }
}
