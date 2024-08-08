import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, Length } from 'class-validator';

export class UserDto {
  @Expose()
  uuid: string;

  @Expose()
  @IsString()
  @ApiProperty({ example: 'name' })
  name: string;

  @Expose()
  @IsString()
  @Length(2, 50)
  @ApiProperty({ example: 'username123' })
  username: string;

  @Expose()
  level: number;

  @Expose()
  coins: number;

  @Expose()
  isInstructioned: boolean;
}
