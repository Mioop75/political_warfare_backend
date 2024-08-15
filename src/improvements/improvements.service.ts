import { PrismaService } from '@/prisma.service';
import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common';
import { uniqBy } from 'lodash';
import { BuyImprovementDto, InputImprovementDto } from './improvement.dto';
import { improvementsArray } from './improvements.array';

@Injectable()
export class ImprovementsService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    const improvements = await this.prisma.improvement.findMany();

    if (improvements.length < 1) {
      improvementsArray.map(
        async (improvement) => await this.create(improvement),
      );
    }
  }

  async getAll() {
    const improvements = await this.prisma.improvement.findMany({
      orderBy: {
        type: 'desc',
      },
    });

    const types = new Set();
    const improvementsWithTypes = [];

    for (const improvement of improvements) {
      const type = improvement.type;

      types.add(type);
    }

    for (let i = 0; i < improvements.length; i++) {
      const improvement = improvements[i];

      if (types.has(improvement.type)) {
        improvementsWithTypes.push({
          type: improvement.type,
          improvements: improvements.filter(
            ({ type }) => type === improvement.type,
          ),
        });
      }
    }

    return uniqBy(improvementsWithTypes, 'type');
  }

  async create(dto: InputImprovementDto) {
    return await this.prisma.improvement.create({ data: dto });
  }

  async buyImprovement(dto: BuyImprovementDto) {
    return this.prisma.$transaction(async (tx) => {
      const user = await tx.user.findFirst({ where: { uuid: dto.user_uuid } });

      const improvement = await tx.improvement.findFirst({
        where: { uuid: dto.improvement_uuid },
      });

      if (user.coins < improvement.cost)
        throw new BadRequestException('Your balance is low');

      const updatedUserProfit = await tx.user.update({
        where: { uuid: user.uuid },
        data: {
          profit: user.profit + improvement.profit,
          coins: user.coins - improvement.cost,
        },
      });

      return updatedUserProfit;
    });
  }
}
