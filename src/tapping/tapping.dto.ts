import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class TappingDto {
  @Expose()
  @IsString()
  user_uuid: string;
}

export class GetCoinsAndEnergyDto {
  @Expose()
  coins: number;

  @Expose()
  energy: number;
}
