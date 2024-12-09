import { Test, TestingModule } from '@nestjs/testing';
import { SearchDetailService } from './search.service';

describe('CategoryService', () => {
  let service: SearchDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchDetailService],
    }).compile();

    service = module.get<SearchDetailService>(SearchDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
