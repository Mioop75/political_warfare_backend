import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsString, Length } from 'class-validator';

export class LevelDto {
  @Expose()
  current: number;

  @Expose()
  sum: number;
}

class EnergyDto {
  @Expose()
  current: number;

  @Expose()
  max: number;
}

export class UserDto {
  @Expose()
  uuid: string;

  @Expose()
  @IsString()
  @ApiProperty({ example: 'name' })
  first_name: string;

  @Expose()
  @IsString()
  @Length(2, 50)
  @ApiProperty({ example: 'username123' })
  username: string;

  @Expose()
  @Type(() => LevelDto)
  level: LevelDto;

  @Expose()
  @Type(() => EnergyDto)
  energy: EnergyDto;

  @Expose()
  profit: number;

  @Expose()
  coins: number;

  @Expose()
  isInstructioned: boolean;
}
