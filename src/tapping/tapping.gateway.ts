import config from '@/config/config';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { TappingService } from './tapping.service';

@WebSocketGateway({ cors: { origin: config().SITE_API } })
export class TappingGateway {
  constructor(private readonly tappingService: TappingService) {}

  @SubscribeMessage('tapping')
  async tapping() {}
}
