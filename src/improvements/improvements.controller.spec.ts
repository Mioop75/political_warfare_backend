import { Test, TestingModule } from '@nestjs/testing';
import { ImprovementsController } from './improvements.controller';
import { ImprovementsService } from './improvements.service';

describe('ImprovementsController', () => {
  let controller: ImprovementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImprovementsController],
      providers: [ImprovementsService],
    }).compile();

    controller = module.get<ImprovementsController>(ImprovementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
