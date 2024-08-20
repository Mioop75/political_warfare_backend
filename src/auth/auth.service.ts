import { PrismaService } from '@/prisma.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async authTelegram(dto: LoginAuthDto) {
    const foundUser = await this.prisma.user.findFirst({
      where: { telegram_id: dto.telegram_id },
      include: { level: true, energy: true },
    });

    if (!foundUser) {
      const improvements = await this.prisma.purchased_improvement.findMany();

      const createdUser = await this.prisma.user.create({
        data: {
          ...dto,
          level: { create: { current: 1, percent: 0, sum: 0 } },
          energy: { create: { current: 1000, max: 1000 } },
          improvements: {
            connect: improvements.map((improvement) => ({
              id: improvement.id,
            })),
          },
        },
        include: { level: true, energy: true },
      });

      const token = await this.generateToken({
        uuid: createdUser.uuid,
        username: createdUser.username,
      });

      return {
        token,
        user: createdUser,
      };
    }

    const token = await this.generateToken({
      uuid: foundUser.uuid,
      username: foundUser.username,
    });

    return {
      token,
      user: foundUser,
    };
  }

  async getMe(uuid: string) {
    const user = await this.prisma.user.findFirst({
      where: { uuid },
      include: { level: true, energy: true },
    });

    const token = await this.generateToken({
      uuid: user.uuid,
      username: user.username,
    });

    return { token, user };
  }

  async generateToken(payload: { uuid: string; username: string }) {
    const generatedToken = await this.jwtService.signAsync(payload);
    return generatedToken;
  }
}
