import { TransactionBuilder, Keypair, Networks } from '@stellar/stellar-sdk';
import { signTransaction } from '@stellar/freighter-api';
import { StellarClient } from './client';
import { StellarNetwork, STELLAR_NETWORKS } from './constants';

export class TransactionService {
  private client: StellarClient;
  private networkPassphrase: string;

  constructor(client: StellarClient, network: StellarNetwork) {
    this.client = client;
    this.networkPassphrase = network === STELLAR_NETWORKS.MAINNET 
      ? Networks.PUBLIC 
      : (network === STELLAR_NETWORKS.FUTURENET ? Networks.FUTURENET : Networks.TESTNET);
  }

  async buildAndSignTransaction(sourceAccountId: string, operations: any[]) {
    const account = await this.client.getAccount(sourceAccountId);
    
    let builder = new TransactionBuilder(account, {
      fee: '100',
      networkPassphrase: this.networkPassphrase,
    });

    for (const op of operations) {
      builder = builder.addOperation(op);
    }

    const transaction = builder.setTimeout(30).build();

    // In a real app, sign with Freighter
    const signedTx = await signTransaction(transaction.toXDR(), { network: this.networkPassphrase });
    return signedTx;
  }
}
