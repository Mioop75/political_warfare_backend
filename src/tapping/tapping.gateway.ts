import config from '@/config/config';
import { UserDto } from '@/users/dto/user.dto';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { plainToInstance } from 'class-transformer';
import { TappingDto } from './tapping.dto';
import { TappingService } from './tapping.service';

@WebSocketGateway({ namespace: 'tapping', cors: { origin: config().SITE_API } })
export class TappingGateway {
  constructor(private readonly tappingService: TappingService) {}

  @SubscribeMessage('tapping')
  async tapping(@MessageBody() dto: TappingDto) {
    const updated = await this.tappingService.tapping(dto);

    return plainToInstance(UserDto, updated);
  }
}
