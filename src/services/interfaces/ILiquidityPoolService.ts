import { LiquidityPool, PoolLiquidity, TokenAmounts, DEXProtocol, PaginatedResponse, PaginationParams } from '../../types';

/**
 * Interface for Liquidity Pool Service
 * Integrates with DEX protocols for pool creation and management
 */
export interface ILiquidityPoolService {
  /**
   * Create a new liquidity pool
   */
  createPool(
    tokenA: string,
    tokenB: string,
    initialLiquidity: PoolLiquidity,
    protocol?: DEXProtocol
  ): Promise<string>; // Returns pool address

  /**
   * Add liquidity to an existing pool
   */
  addLiquidity(poolAddress: string, amounts: TokenAmounts): Promise<string>; // Returns transaction signature

  /**
   * Remove liquidity from a pool
   */
  removeLiquidity(poolAddress: string, lpTokens: number): Promise<string>; // Returns transaction signature

  /**
   * Get detailed pool information
   */
  getPoolInfo(poolAddress: string): Promise<LiquidityPool>;

  /**
   * Get pools created by a specific wallet
   */
  getPoolsByCreator(creatorAddress: string, pagination?: PaginationParams): Promise<PaginatedResponse<LiquidityPool>>;

  /**
   * Get all available pools for a token
   */
  getPoolsForToken(tokenMint: string, pagination?: PaginationParams): Promise<PaginatedResponse<LiquidityPool>>;

  /**
   * Execute a token swap through a pool
   */
  swapTokens(
    inputToken: string,
    outputToken: string,
    amount: number,
    slippageTolerance: number
  ): Promise<{
    signature: string;
    outputAmount: number;
    priceImpact: number;
  }>;

  /**
   * Get swap quote (estimated output amount)
   */
  getSwapQuote(
    inputToken: string,
    outputToken: string,
    amount: number
  ): Promise<{
    outputAmount: number;
    priceImpact: number;
    minimumReceived: number;
    fee: number;
  }>;

  /**
   * Get best available pool for a token pair
   */
  getBestPool(tokenA: string, tokenB: string): Promise<LiquidityPool | null>;

  /**
   * Get pool statistics (volume, fees, APY)
   */
  getPoolStatistics(poolAddress: string, timeframe: '24h' | '7d' | '30d'): Promise<{
    volume: number;
    fees: number;
    apy: number;
    transactions: number;
  }>;

  /**
   * Get supported DEX protocols
   */
  getSupportedProtocols(): DEXProtocol[];

  /**
   * Check if a pool exists for a token pair
   */
  poolExists(tokenA: string, tokenB: string, protocol?: DEXProtocol): Promise<boolean>;
}