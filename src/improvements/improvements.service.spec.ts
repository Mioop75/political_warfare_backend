import { Test, TestingModule } from '@nestjs/testing';
import { ImprovementsService } from './improvements.service';

describe('ImprovementsService', () => {
  let service: ImprovementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImprovementsService],
    }).compile();

    service = module.get<ImprovementsService>(ImprovementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
