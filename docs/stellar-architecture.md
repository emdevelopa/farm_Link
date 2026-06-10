# Stellar Architecture for FarmLink Africa

## Network Architecture
FarmLink Africa utilizes the Stellar Network to manage fast, low-cost payments and secure escrow mechanisms between Farmers, Buyers, and Transporters. 
By default, the environment is configured to use the `TESTNET` for development and testing.

- **RPC URL:** `https://soroban-testnet.stellar.org`
- **Horizon URL:** `https://horizon-testnet.stellar.org`

## Wallet Integration
We use `@stellar/freighter-api` to integrate the Freighter wallet, allowing users to connect their wallets to the platform, switch networks, and manage keys securely. 

## Escrow Design
The Escrow Smart Contract is built using Soroban. It ensures that payments from buyers are locked securely and only released when transporters have delivered the produce. The contract supports `create`, `release`, and `refund` capabilities to securely manage funds natively on the Stellar ecosystem.

## Contract Deployment
Contracts are located in the `contracts/` directory.

To build and deploy:
```bash
cargo build --target wasm32-unknown-unknown --release
soroban contract deploy --wasm target/wasm32-unknown-unknown/release/escrow.wasm --source <YOUR_SOURCE_ACCOUNT> --network testnet
```

## Testing Guide
Run Rust tests for Soroban contracts via:
```bash
cargo test
```
