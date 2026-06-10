import { SorobanRpc, Horizon } from '@stellar/stellar-sdk';
import { NETWORK_URLS, RPC_URLS, StellarNetwork } from './constants';

export class StellarClient {
  private horizonUrl: string;
  private rpcUrl: string;
  public horizon: Horizon.Server;
  public rpc: SorobanRpc.Server;

  constructor(network: StellarNetwork) {
    this.horizonUrl = NETWORK_URLS[network];
    this.rpcUrl = RPC_URLS[network];
    
    this.horizon = new Horizon.Server(this.horizonUrl);
    this.rpc = new SorobanRpc.Server(this.rpcUrl);
  }

  async getAccount(accountId: string) {
    try {
      return await this.horizon.loadAccount(accountId);
    } catch (error) {
      console.error('Failed to load account:', error);
      throw error;
    }
  }
}
