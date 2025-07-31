import { PublicKey } from '@solana/web3.js';

/**
 * Platform constants and configuration
 */

// Solana Program IDs
export const TOKEN_PROGRAM_ID = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
export const TOKEN_METADATA_PROGRAM_ID = new PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
export const ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');

// Platform Configuration
export const PLATFORM_CONFIG = {
  // Transaction limits
  MAX_AIRDROP_BATCH_SIZE: 25,
  MAX_TRANSACTION_RETRIES: 3,
  TRANSACTION_TIMEOUT: 30000, // 30 seconds
  
  // Fee structure (in SOL)
  FEES: {
    TOKEN_CREATION: 0.3,
    ICO_CREATION: 0.1,
    AIRDROP_EXECUTION: 0.05,
    POOL_CREATION: 0.2,
  },
  
  // Pagination defaults
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
  
  // Token defaults
  DEFAULT_TOKEN_DECIMALS: 6,
  DEFAULT_TOKEN_SUPPLY: 1_000_000_000,
  
  // ICO defaults
  MIN_ICO_DURATION: 3600, // 1 hour in seconds
  MAX_ICO_DURATION: 2_592_000, // 30 days in seconds
  MIN_TOKEN_PRICE: 0.000001, // Minimum price per token in SOL
  
  // Airdrop limits
  MIN_AIRDROP_AMOUNT: 1,
  MAX_AIRDROP_RECIPIENTS: 10000,
  
  // Pool configuration
  MIN_INITIAL_LIQUIDITY: 0.1, // Minimum SOL for initial liquidity
  DEFAULT_SLIPPAGE_TOLERANCE: 0.5, // 0.5%
  MAX_SLIPPAGE_TOLERANCE: 50, // 50%
} as const;

// Supported DEX protocols
export const DEX_PROTOCOLS = {
  RAYDIUM: 'raydium',
  ORCA: 'orca',
  JUPITER: 'jupiter',
} as const;

// Error codes
export const ERROR_CODES = {
  // Validation errors
  INVALID_TOKEN_MINT: 'INVALID_TOKEN_MINT',
  INVALID_WALLET_ADDRESS: 'INVALID_WALLET_ADDRESS',
  INSUFFICIENT_BALANCE: 'INSUFFICIENT_BALANCE',
  INVALID_AMOUNT: 'INVALID_AMOUNT',
  
  // ICO errors
  ICO_NOT_ACTIVE: 'ICO_NOT_ACTIVE',
  ICO_SOLD_OUT: 'ICO_SOLD_OUT',
  ICO_NOT_FOUND: 'ICO_NOT_FOUND',
  UNAUTHORIZED_ICO_ACCESS: 'UNAUTHORIZED_ICO_ACCESS',
  
  // Airdrop errors
  AIRDROP_NOT_FOUND: 'AIRDROP_NOT_FOUND',
  AIRDROP_ALREADY_EXECUTED: 'AIRDROP_ALREADY_EXECUTED',
  INVALID_RECIPIENTS: 'INVALID_RECIPIENTS',
  
  // Pool errors
  POOL_NOT_FOUND: 'POOL_NOT_FOUND',
  INSUFFICIENT_LIQUIDITY: 'INSUFFICIENT_LIQUIDITY',
  SLIPPAGE_EXCEEDED: 'SLIPPAGE_EXCEEDED',
  
  // Blockchain errors
  TRANSACTION_FAILED: 'TRANSACTION_FAILED',
  NETWORK_ERROR: 'NETWORK_ERROR',
  WALLET_NOT_CONNECTED: 'WALLET_NOT_CONNECTED',
} as const;

// API endpoints (for future backend integration)
export const API_ENDPOINTS = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
  TOKENS: '/api/tokens',
  ICOS: '/api/icos',
  AIRDROPS: '/api/airdrops',
  POOLS: '/api/pools',
  PORTFOLIO: '/api/portfolio',
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  WALLET_PREFERENCE: 'wallet_preference',
  THEME_PREFERENCE: 'theme_preference',
  PORTFOLIO_CACHE: 'portfolio_cache',
  TRANSACTION_HISTORY: 'transaction_history',
} as const;