import { PrismaService } from '@/prisma.service';
import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common';
import { uniqBy } from 'lodash';
import { BuyImprovementDto } from './improvement.dto';
import { improvementsArray } from './improvements.array';

@Injectable()
export class ImprovementsService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    const improvements = await this.prisma.improvement.findMany();

    if (improvements.length < 1) {
      improvementsArray.map(
        async (improvement) =>
          await this.prisma.improvement.create({ data: improvement }),
      );
    }
  }

  async getAll() {
    const gotImprovements = await this.prisma.improvement.findMany({
      include: {
        informations: {
          include: {
            improvement: true,
            information: {
              include: {
                other_required_improvements: true,
                required_improvements: true,
              },
            },
          },
        },
      },
    });

    const improvements = await this.transformationImprovement(gotImprovements);

    const types = new Set();
    const improvementsWithTypes = [];

    for (const improvement of improvements) {
      const type = improvement.type;

      types.add(type);
    }

    for (let i = 0; i < improvements.length; i++) {
      const improvement = improvements[i];
      const filteredImprovements = improvements.filter(
        ({ type }) => type === improvement.type,
      );

      if (types.has(improvement.type)) {
        improvementsWithTypes.push({
          type: improvement.type,
          improvements: filteredImprovements,
        });
      }
    }

    return uniqBy(improvementsWithTypes, 'type');
  }

  async transformationImprovement(improvements: any) {
    return improvements.map((improvement) => {
      const informations = improvement.informations.filter(
        (information) => information.purchased !== true,
      );

      return { ...improvement, information: informations[0].information };
    });
  }

  async buyImprovement(uuid: string, dto: BuyImprovementDto) {
    return this.prisma.$transaction(async (tx) => {
      const user = await tx.user.findFirst({ where: { uuid } });

      // const improvement = await tx.improvement.findFirst({
      //   where: { uuid: dto.improvement_uuid },
      //   include: {
      //     informations: {
      //       include: {
      //         information: true,
      //       },
      //     },
      //   },
      // });

      const infoImprovement = await tx.info_Improvement.findFirst({
        where: { id: dto.infoImprovement_id },
      });

      if (user.coins < infoImprovement.cost)
        throw new BadRequestException('Your balance is low');

      const updatedUserProfit = await tx.user.update({
        where: { uuid: user.uuid },
        data: {
          profit: user.profit + infoImprovement.profit,
          coins: user.coins - infoImprovement.cost,
        },
      });

      await tx.purchased_improvement.update({
        where: {
          id: infoImprovement.purchased_improvement_id,
        },
        data: {
          purchased: true,
        },
      });

      return updatedUserProfit;
    });
  }
}
