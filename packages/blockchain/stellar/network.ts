import { StellarNetwork, DEFAULT_NETWORK } from './constants';

export const getActiveNetwork = (): StellarNetwork => {
  return (process.env.NEXT_PUBLIC_STELLAR_NETWORK as StellarNetwork) || DEFAULT_NETWORK;
};
