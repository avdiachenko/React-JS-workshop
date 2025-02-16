import { Test, TestingModule } from '@nestjs/testing';
import { TeeheeApiService } from './teehee_api.service';

describe('TeeheeApiService', () => {
  let service: TeeheeApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeeheeApiService],
    }).compile();

    service = module.get<TeeheeApiService>(TeeheeApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
