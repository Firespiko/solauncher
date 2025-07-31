import { Airdrop, AirdropParams, AirdropRecipient, PaginatedResponse, PaginationParams } from '../../types';

/**
 * Interface for Airdrop Distribution Service
 * Handles batch token distribution to multiple recipients
 */
export interface IAirdropService {
  /**
   * Create a new airdrop campaign
   */
  createAirdrop(params: AirdropParams): Promise<string>; // Returns airdrop ID

  /**
   * Execute an airdrop (process batch transfers)
   */
  executeAirdrop(airdropId: string): Promise<string[]>; // Returns array of transaction signatures

  /**
   * Get airdrop status and progress
   */
  getAirdropStatus(airdropId: string): Promise<Airdrop>;

  /**
   * Get airdrops created by a specific wallet
   */
  getAirdropsByCreator(creatorAddress: string, pagination?: PaginationParams): Promise<PaginatedResponse<Airdrop>>;

  /**
   * Get airdrop history for a recipient wallet
   */
  getAirdropHistory(walletAddress: string, pagination?: PaginationParams): Promise<PaginatedResponse<Airdrop>>;

  /**
   * Validate recipient addresses
   */
  validateRecipients(addresses: string[]): Promise<{
    valid: string[];
    invalid: Array<{ address: string; reason: string }>;
  }>;

  /**
   * Estimate airdrop costs (transaction fees)
   */
  estimateAirdropCost(recipientCount: number): Promise<number>; // Returns cost in SOL

  /**
   * Cancel a pending airdrop
   */
  cancelAirdrop(airdropId: string): Promise<boolean>;

  /**
   * Retry failed airdrop transfers
   */
  retryFailedTransfers(airdropId: string): Promise<string[]>; // Returns new transaction signatures

  /**
   * Import recipients from CSV data
   */
  importRecipientsFromCSV(csvData: string): Promise<Array<{ address: string; amount: number }>>;
}