import { PickType } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class ImprovementDto {
  @Expose()
  uuid: string;

  @Expose()
  @IsString()
  img: string;

  @Expose()
  @IsString()
  title: string;

  @Expose()
  @IsString()
  type: string;

  @Expose()
  @IsNumber()
  cost: number;

  @Expose()
  @IsNumber()
  required_level: number;

  @Expose()
  @IsNumber()
  profit: number;
}

export class ImprovementsWithTypesDto {
  @Expose()
  type: string;

  @Expose()
  @Type(() => ImprovementDto)
  improvements: ImprovementDto[];
}

export class InputImprovementDto extends PickType(ImprovementDto, [
  'img',
  'title',
  'cost',
  'required_level',
  'type',
  'profit',
]) {}

export class BuyImprovementDto {
  @Expose()
  @IsString()
  user_uuid: string;

  @Expose()
  @IsString()
  improvement_uuid: string;
}
