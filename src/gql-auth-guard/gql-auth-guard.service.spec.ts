import { Test, TestingModule } from '@nestjs/testing';
import { GqlAuthGuardService } from './gql-auth-guard.service';

describe('GqlAuthGuardService', () => {
  let service: GqlAuthGuardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GqlAuthGuardService],
    }).compile();

    service = module.get<GqlAuthGuardService>(GqlAuthGuardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
