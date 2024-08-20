import { AuthGuard } from '@/auth/auth.guard';
import { UserDto } from '@/users/dto/user.dto';
import { CurrentUser } from '@/users/user.decorator';
import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ReferralsService } from './referrals.service';

@Controller('referrals')
export class ReferralsController {
  constructor(private readonly referralsService: ReferralsService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getReferrals(@CurrentUser('uuid') uuid: string) {
    const gotUsers = await this.referralsService.getReferrals(uuid);

    return plainToInstance(UserDto, gotUsers);
  }

  @UseGuards(AuthGuard)
  @Post()
  async invitePerson() {}
}
