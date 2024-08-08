import { WebSocketGateway } from '@nestjs/websockets';
import { TappingService } from './tapping.service';

@WebSocketGateway()
export class TappingGateway {
  constructor(private readonly tappingService: TappingService) {}
}
