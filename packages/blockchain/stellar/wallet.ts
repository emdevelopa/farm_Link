import { create } from 'zustand';
import { isConnected, requestAccess, getPublicKey, getNetworkDetails } from '@stellar/freighter-api';
import { WalletState } from './types';

interface WalletStore extends WalletState {
  connect: () => Promise<void>;
  disconnect: () => void;
  checkConnection: () => Promise<void>;
}

export const useWalletStore = create<WalletStore>((set) => ({
  address: null,
  network: null,
  isConnected: false,
  isConnecting: false,
  error: null,

  connect: async () => {
    set({ isConnecting: true, error: null });
    try {
      if (await isConnected()) {
        const access = await requestAccess();
        if (access) {
          const address = await getPublicKey();
          const networkDetails = await getNetworkDetails();
          set({
            address,
            network: networkDetails.network,
            isConnected: true,
            isConnecting: false,
          });
        }
      } else {
        set({ error: 'Freighter wallet not found', isConnecting: false });
      }
    } catch (err: any) {
      set({ error: err.message || 'Failed to connect wallet', isConnecting: false });
    }
  },

  disconnect: () => {
    set({
      address: null,
      network: null,
      isConnected: false,
      error: null,
    });
  },

  checkConnection: async () => {
    try {
      if (await isConnected()) {
        const address = await getPublicKey();
        const networkDetails = await getNetworkDetails();
        set({
          address,
          network: networkDetails.network,
          isConnected: true,
        });
      }
    } catch (e) {
      // Ignore
    }
  }
}));
