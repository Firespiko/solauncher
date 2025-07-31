// Core data model interfaces for the Token Ecosystem Platform

// Token Model - extends existing token functionality
export interface Token {
  mintAddress: string;
  name: string;
  symbol: string;
  decimals: number;
  supply: number;
  description: string;
  imageUrl: string;
  creator: string;
  createdAt: Date;
  metadata: TokenMetadata;
}

export interface TokenMetadata {
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: Creator[] | null;
  collection: Collection | null;
  uses: Uses | null;
}

export interface Creator {
  address: string;
  verified: boolean;
  share: number;
}

export interface Collection {
  verified: boolean;
  key: string;
}

export interface Uses {
  useMethod: string;
  remaining: number;
  total: number;
}

// ICO Model
export interface ICO {
  id: string;
  contractAddress: string;
  tokenMint: string;
  creator: string;
  pricePerToken: number;
  tokensForSale: number;
  tokensSold: number;
  startTime: Date;
  endTime: Date;
  fundingGoal: number;
  fundsRaised: number;
  status: ICOStatus;
  participants: ICOParticipant[];
}

export type ICOStatus = 'active' | 'completed' | 'cancelled';

export interface ICOParticipant {
  walletAddress: string;
  tokensPurchased: number;
  amountPaid: number;
  transactionSignature: string;
  timestamp: Date;
}

export interface ICOParams {
  tokenMint: string;
  pricePerToken: number;
  tokensForSale: number;
  startTime: Date;
  endTime: Date;
  fundingGoal: number;
}

// Airdrop Model
export interface Airdrop {
  id: string;
  tokenMint: string;
  creator: string;
  totalAmount: number;
  recipients: AirdropRecipient[];
  status: AirdropStatus;
  createdAt: Date;
  executedAt?: Date;
  transactionSignatures: string[];
}

export type AirdropStatus = 'pending' | 'processing' | 'completed' | 'failed';

export interface AirdropRecipient {
  address: string;
  amount: number;
  status: 'pending' | 'success' | 'failed';
  transactionSignature?: string;
  errorMessage?: string;
}

export interface AirdropParams {
  tokenMint: string;
  recipients: Array<{
    address: string;
    amount: number;
  }>;
  totalAmount: number;
}

// Liquidity Pool Model
export interface LiquidityPool {
  address: string;
  tokenA: string;
  tokenB: string;
  creator: string;
  totalLiquidity: number;
  volume24h: number;
  fees24h: number;
  apy: number;
  protocol: DEXProtocol;
  createdAt: Date;
}

export type DEXProtocol = 'raydium' | 'orca' | 'jupiter';

export interface PoolLiquidity {
  tokenAAmount: number;
  tokenBAmount: number;
}

export interface TokenAmounts {
  tokenA: number;
  tokenB: number;
}

// Portfolio Model
export interface Portfolio {
  walletAddress: string;
  tokens: PortfolioToken[];
  totalValue: number;
  lastUpdated: Date;
}

export interface PortfolioToken {
  mintAddress: string;
  name: string;
  symbol: string;
  balance: number;
  value: number;
  source: TokenSource;
  metadata: TokenMetadata;
}

export type TokenSource = 'minted' | 'ico_purchase' | 'airdrop' | 'trading' | 'liquidity_provision';

// Transaction History Model
export interface TransactionHistory {
  walletAddress: string;
  transactions: PlatformTransaction[];
}

export interface PlatformTransaction {
  id: string;
  type: TransactionType;
  signature: string;
  timestamp: Date;
  status: 'pending' | 'confirmed' | 'failed';
  details: TransactionDetails;
}

export type TransactionType = 'token_mint' | 'ico_creation' | 'ico_purchase' | 'airdrop_creation' | 'airdrop_execution' | 'pool_creation' | 'liquidity_add' | 'liquidity_remove' | 'token_swap';

export interface TransactionDetails {
  tokenMint?: string;
  amount?: number;
  recipient?: string;
  price?: number;
  poolAddress?: string;
  [key: string]: any;
}

// Error Handling
export class PlatformError extends Error {
  constructor(
    public code: string,
    public message: string,
    public category: 'blockchain' | 'validation' | 'integration',
    public retryable: boolean = false
  ) {
    super(message);
    this.name = 'PlatformError';
  }
}

// Common utility types
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}