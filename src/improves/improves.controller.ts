import { Controller } from '@nestjs/common';
import { ImprovesService } from './improves.service';

@Controller('improves')
export class ImprovesController {
  constructor(private readonly improvesService: ImprovesService) {}
}
