import { PrismaService } from '@/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TappingService {
  constructor(private readonly prisma: PrismaService) {}

  async tapping() {}
}
