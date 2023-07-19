import { Test, TestingModule } from '@nestjs/testing';
import { ReactiveService } from './reactive.service';

describe('ReactiveService', () => {
  let service: ReactiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReactiveService],
    }).compile();

    service = module.get<ReactiveService>(ReactiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
