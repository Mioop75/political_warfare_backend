import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class ReferralDto {
  @Expose()
  @IsString()
  invited_uuid: string;

  @Expose()
  @IsString()
  referral_uuid: string;
}
