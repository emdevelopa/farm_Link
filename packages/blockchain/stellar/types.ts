export interface WalletState {
  address: string | null;
  network: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  error: string | null;
}

export interface EscrowDetails {
  id: string;
  buyer: string;
  seller: string;
  amount: string;
  asset: string;
  status: 'PENDING' | 'RELEASED' | 'REFUNDED';
}
