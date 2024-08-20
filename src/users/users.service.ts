import { PrismaService } from '@/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

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
