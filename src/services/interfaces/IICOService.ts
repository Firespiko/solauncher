import { ICO, ICOParams, ICOParticipant, PaginatedResponse, PaginationParams } from '../../types';

/**
 * Interface for ICO Launchpad Service
 * Manages Initial Coin Offerings with smart contract integration
 */
export interface IICOService {
  /**
   * Create a new ICO campaign
   */
  createICO(params: ICOParams): Promise<string>; // Returns ICO contract address

  /**
   * Purchase tokens during an active ICO
   */
  purchaseTokens(icoAddress: string, amount: number): Promise<string>; // Returns transaction signature

  /**
   * Get all active ICO campaigns
   */
  getActiveICOs(pagination?: PaginationParams): Promise<PaginatedResponse<ICO>>;

  /**
   * Get detailed information about a specific ICO
   */
  getICODetails(icoAddress: string): Promise<ICO>;

  /**
   * Get ICOs created by a specific wallet
   */
  getICOsByCreator(creatorAddress: string, pagination?: PaginationParams): Promise<PaginatedResponse<ICO>>;

  /**
   * Get ICO participation history for a wallet
   */
  getICOParticipation(walletAddress: string, pagination?: PaginationParams): Promise<PaginatedResponse<ICOParticipant>>;

  /**
   * Finalize an ICO (close sale and distribute funds)
   */
  finalizeICO(icoAddress: string): Promise<string>; // Returns transaction signature

  /**
   * Check if an ICO is still active
   */
  isICOActive(icoAddress: string): Promise<boolean>;

  /**
   * Get ICO progress statistics
   */
  getICOProgress(icoAddress: string): Promise<{
    tokensRemaining: number;
    percentageSold: number;
    timeRemaining: number;
    participantCount: number;
  }>;
}