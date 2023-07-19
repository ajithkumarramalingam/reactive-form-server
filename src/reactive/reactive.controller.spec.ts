import { Test, TestingModule } from '@nestjs/testing';
import { ReactiveController } from './reactive.controller';
import { ReactiveService } from './reactive.service';

describe('ReactiveController', () => {
  let controller: ReactiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReactiveController],
      providers: [ReactiveService],
    }).compile();

    controller = module.get<ReactiveController>(ReactiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
