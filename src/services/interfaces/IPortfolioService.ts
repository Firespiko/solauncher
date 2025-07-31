import { Portfolio, PortfolioToken, TransactionHistory, PlatformTransaction, PaginationParams, PaginatedResponse } from '../../types';

/**
 * Interface for Portfolio Management Service
 * Aggregates user's token holdings and transaction history
 */
export interface IPortfolioService {
  /**
   * Get complete user portfolio
   */
  getUserPortfolio(walletAddress: string): Promise<Portfolio>;

  /**
   * Get transaction history for a wallet
   */
  getTransactionHistory(
    walletAddress: string,
    pagination?: PaginationParams
  ): Promise<PaginatedResponse<PlatformTransaction>>;

  /**
   * Calculate total portfolio value in SOL/USD
   */
  calculatePortfolioValue(portfolio: Portfolio): Promise<number>;

  /**
   * Export portfolio data in various formats
   */
  exportPortfolioData(
    walletAddress: string,
    format: 'csv' | 'json' | 'pdf'
  ): Promise<Blob>;

  /**
   * Get portfolio performance over time
   */
  getPortfolioPerformance(
    walletAddress: string,
    timeframe: '24h' | '7d' | '30d' | '1y'
  ): Promise<{
    currentValue: number;
    previousValue: number;
    changePercent: number;
    changeAmount: number;
  }>;

  /**
   * Get token allocation breakdown
   */
  getTokenAllocation(walletAddress: string): Promise<Array<{
    token: PortfolioToken;
    percentage: number;
    value: number;
  }>>;

  /**
   * Track a new transaction
   */
  trackTransaction(transaction: PlatformTransaction): Promise<void>;

  /**
   * Get portfolio summary statistics
   */
  getPortfolioSummary(walletAddress: string): Promise<{
    totalTokens: number;
    totalValue: number;
    totalTransactions: number;
    mostValuableToken: PortfolioToken;
    recentActivity: PlatformTransaction[];
  }>;

  /**
   * Subscribe to portfolio updates (real-time)
   */
  subscribeToPortfolioUpdates(
    walletAddress: string,
    callback: (portfolio: Portfolio) => void
  ): () => void; // Returns unsubscribe function

  /**
   * Refresh portfolio data from blockchain
   */
  refreshPortfolio(walletAddress: string): Promise<Portfolio>;
}