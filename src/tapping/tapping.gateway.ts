import config from '@/config/config';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { plainToInstance } from 'class-transformer';
import { GetCoinsAndEnergyDto, TappingDto } from './tapping.dto';
import { TappingService } from './tapping.service';

@WebSocketGateway({
  namespace: 'tapping',
  cors: {
    origin: config().SITE_API,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  },
})
export class TappingGateway {
  constructor(private readonly tappingService: TappingService) {}

  @SubscribeMessage('get-coins-and-energy')
  async getCoinsAndEnergy(@MessageBody() dto: TappingDto) {
    const updated = await this.tappingService.getCoinsAndEnergy(dto);

    return plainToInstance(GetCoinsAndEnergyDto, updated);
  }

  @SubscribeMessage('tapping')
  async tapping(@MessageBody() dto: TappingDto) {
    const updated = await this.tappingService.tapping(dto);

    return plainToInstance(GetCoinsAndEnergyDto, updated);
  }
}
