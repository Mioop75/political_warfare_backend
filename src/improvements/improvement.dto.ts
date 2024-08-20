import { UserDto } from '@/users/dto/user.dto';
import { Expose, Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class InfoImprovementDto {
  @Expose()
  id: number;

  @Expose()
  cost: number;

  @Expose()
  profit: number;

  @Expose()
  required_level: number;

  @Expose()
  level: number;
}

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
  @Type(() => InfoImprovementDto)
  information: InfoImprovementDto;

  @Expose()
  @Type(() => PurchasedImprovementDto)
  purchased: PurchasedImprovementDto[];
}

export class PurchasedImprovementDto {
  @Expose()
  id: number;

  @Expose()
  @Type(() => InfoImprovementDto)
  info_improvement: InfoImprovementDto;

  @Expose()
  @Type(() => ImprovementDto)
  improvement: ImprovementDto;

  @Expose()
  @Type(() => UserDto)
  user: UserDto;
}

export class RequiredImprovements {
  @Expose()
  id: number;

  @Expose()
  @Type(() => InfoImprovementDto)
  info_improvement: InfoImprovementDto;

  @Expose()
  @Type(() => InfoImprovementDto)
  other_info_improvement: InfoImprovementDto;
}

export class ImprovementsWithTypesDto {
  @Expose()
  type: string;

  @Expose()
  @Type(() => ImprovementDto)
  improvements: ImprovementDto[];
}

export class BuyImprovementDto {
  @Expose()
  @IsString()
  improvement_uuid: string;

  @Expose()
  @IsNumber()
  infoImprovement_id: number;
}
