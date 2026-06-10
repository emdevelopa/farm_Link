export const STELLAR_NETWORKS = {
  TESTNET: 'TESTNET',
  FUTURENET: 'FUTURENET',
  MAINNET: 'MAINNET',
} as const;

export type StellarNetwork = keyof typeof STELLAR_NETWORKS;

export const DEFAULT_NETWORK = STELLAR_NETWORKS.TESTNET;

export const NETWORK_URLS = {
  [STELLAR_NETWORKS.TESTNET]: 'https://horizon-testnet.stellar.org',
  [STELLAR_NETWORKS.FUTURENET]: 'https://horizon-futurenet.stellar.org',
  [STELLAR_NETWORKS.MAINNET]: 'https://horizon.stellar.org',
};

export const RPC_URLS = {
  [STELLAR_NETWORKS.TESTNET]: 'https://soroban-testnet.stellar.org',
  [STELLAR_NETWORKS.FUTURENET]: 'https://rpc-futurenet.stellar.org',
  [STELLAR_NETWORKS.MAINNET]: 'https://soroban.stellar.org',
};
