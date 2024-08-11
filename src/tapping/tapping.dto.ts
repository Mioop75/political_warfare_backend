import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class TappingDto {
  @Expose()
  @IsString()
  user_uuid: string;

  @Expose()
  @IsNumber()
  coin: number;
}
