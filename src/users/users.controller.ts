import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { InputUserDto } from './dto/input-user.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('me')
  async getMe(@Body() dto: InputUserDto) {
    const gotUser = await this.usersService.getMe(dto);

    return plainToInstance(UserDto, gotUser);
  }

  @Patch('set-instructioned')
  async setInstructioned(@Body() dto: { uuid: string }) {
    const updatedUser = await this.usersService.setInstructed(dto.uuid);

    return plainToInstance(UserDto, updatedUser);
  }

  @ApiResponse({
    status: 204,
    description: 'user was deleted',
  })
  @ApiUnauthorizedResponse({ description: "User isn't authorized" })
  @HttpCode(204)
  @Delete(':uuid')
  async delete(@Param('uuid') uuid: string) {
    await this.usersService.delete(uuid);

    return 'Account was deleted';
  }
}
