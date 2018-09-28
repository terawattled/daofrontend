import { TestBed } from '@angular/core/testing';

import { EtherscanService } from './etherscan.service';

describe('EtherscanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtherscanService = TestBed.get(EtherscanService);
    expect(service).toBeTruthy();
  });
});
