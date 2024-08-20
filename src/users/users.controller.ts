import { AuthGuard } from '@/auth/auth.guard';
import { Controller, Delete, HttpCode, Patch, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { UserDto } from './dto/user.dto';
import { CurrentUser } from './user.decorator';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Patch('set-instructioned')
  async setInstructioned(@CurrentUser('uuid') uuid: string) {
    const updatedUser = await this.usersService.setInstructed(uuid);

    return plainToInstance(UserDto, updatedUser);
  }

  @ApiResponse({
    status: 204,
    description: 'user was deleted',
  })
  @ApiUnauthorizedResponse({ description: "User isn't authorized" })
  @HttpCode(204)
  @UseGuards(AuthGuard)
  @Delete('')
  async delete(@CurrentUser('uuid') uuid: string) {
    await this.usersService.delete(uuid);

    return 'Account was deleted';
  }
}
