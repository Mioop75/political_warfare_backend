import { PrismaService } from '@/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InputUserDto } from './dto/input-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getMe(dto: InputUserDto) {
    const foundUser = await this.prisma.user.findFirst({
      where: { telegram_id: dto.telegram_id },
      include: { level: true, energy: true },
    });

    if (!foundUser) {
      const createdUser = await this.prisma.user.create({
        data: {
          ...dto,
          level: { create: { current: 1, sum: 0 } },
          energy: { create: { current: 1000, max: 1000 } },
        },
        include: { level: true, energy: true },
      });

      return createdUser;
    }

    return foundUser;
  }

  async setInstructed(uuid: string) {
    const foundUser = await this.prisma.user.findFirst({ where: { uuid } });

    if (!foundUser) throw new NotFoundException('Пользователь не найден');

    const updatedUser = await this.prisma.user.update({
      where: { uuid: foundUser.uuid },
      data: { isInstructioned: true },
      include: { level: true },
    });

    return updatedUser;
  }

  async delete(uuid: string) {
    return await this.prisma.user.delete({ where: { uuid } });
  }
}
