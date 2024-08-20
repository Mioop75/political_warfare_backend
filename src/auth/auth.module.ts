import { PrismaService } from '@/prisma.service';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
  imports: [
    JwtModule.registerAsync({
      global: true,
      useFactory: async (config: ConfigService) => ({
        secret: config.get('JWT_TOKEN'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AuthModule {}
