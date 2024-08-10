import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsString, Length } from 'class-validator';

export class LevelDto {
  current: number;
  sum: number;
}

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
  @Type(() => LevelDto)
  level: LevelDto;

  @Expose()
  coins: number;

  @Expose()
  isInstructioned: boolean;
}
