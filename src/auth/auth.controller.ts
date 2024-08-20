import { CurrentUser } from '@/users/user.decorator';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { AuthDto, LoginAuthDto } from './auth.dto';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth-telegram')
  async authTelegram(@Body() dto: LoginAuthDto) {
    const loggedUser = await this.authService.authTelegram(dto);

    return plainToInstance(AuthDto, loggedUser);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async getMe(@CurrentUser('uuid') uuid: string) {
    const user = await this.authService.getMe(uuid);

    return plainToInstance(AuthDto, user);
  }
}
