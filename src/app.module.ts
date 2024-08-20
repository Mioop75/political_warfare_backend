import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import config from 'src/config/config';
import { BotService } from './bot/bot.service';
import { TappingModule } from './tapping/tapping.module';
import { UsersModule } from './users/users.module';
import { ImprovementsModule } from './improvements/improvements.module';
import { AuthModule } from './auth/auth.module';
import { ReferralsModule } from './referrals/referrals.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: './apps/main/.env',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
      exclude: ['/api*'],
    }),
    UsersModule,
    TappingModule,
    ImprovementsModule,
    AuthModule,
    ReferralsModule,
  ],
  providers: [BotService],
})
export class AppModule {}
