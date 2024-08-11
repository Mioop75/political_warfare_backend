import { PrismaService } from '@/prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { TappingDto } from './tapping.dto';

@Injectable()
export class TappingService {
  constructor(private readonly prisma: PrismaService) {}

  async getCoinsAndEnergy(dto: TappingDto) {
    const user = await this.prisma.user.findFirst({
      where: { uuid: dto.user_uuid },
      include: { energy: true },
    });

    if (!user) throw new UnauthorizedException('Вы не зарегистрированы');

    return { coins: user.coins, energy: user.energy.current };
  }

  async tapping(dto: TappingDto) {
    const user = await this.prisma.user.findFirst({
      where: { uuid: dto.user_uuid },
      include: { energy: true },
    });

    if (!user) throw new UnauthorizedException('Вы не зарегистрированы');

    const updatedUser = await this.prisma.user.update({
      where: { uuid: user.uuid },
      data: {
        coins: user.coins + 1,
        energy: { update: { current: user.energy.current - 1 } },
      },
      include: {
        energy: true,
      },
    });

    return { coins: updatedUser.coins, energy: updatedUser.energy.current };
  }
}
