import { PrismaService } from '@/prisma.service';
import { Injectable } from '@nestjs/common';
import { ReferralDto } from './referral.dto';

@Injectable()
export class ReferralsService {
  constructor(private readonly prisma: PrismaService) {}

  async getReferrals(uuid: string) {
    const { referrals } = await this.prisma.user.findFirst({
      where: { uuid },
      include: { referrals: { include: { referral: true } } },
    });

    return referrals.map((referral) => ({ user: referral.referral }));
  }

  async invitePerson(dto: ReferralDto) {
    console.log(dto);
  }
}
