import { EthereumModule } from './ethereum.module';

describe('EthereumModule', () => {
  let ethereumModule: EthereumModule;

  beforeEach(() => {
    ethereumModule = new EthereumModule();
  });

  it('should create an instance', () => {
    expect(ethereumModule).toBeTruthy();
  });
});
