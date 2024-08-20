import { UserDto } from '@/users/dto/user.dto';
import { PickType } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class LoginAuthDto extends PickType(UserDto, [
  'first_name',
  'username',
]) {
  @Expose()
  @IsNumber()
  telegram_id: number;
}

export class AuthDto {
  @Expose()
  token: string;

  @Expose()
  @Type(() => UserDto)
  user: UserDto;
}
