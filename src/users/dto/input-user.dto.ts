import { PickType } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { UserDto } from './user.dto';

export class InputUserDto extends PickType(UserDto, [
  'first_name',
  'username',
]) {
  @Expose()
  @IsNumber()
  telegram_id: number;
}

export class UpdateUserDto extends PickType(UserDto, [
  'first_name',
  'username',
]) {}
