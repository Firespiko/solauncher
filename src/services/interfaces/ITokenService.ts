import { Token, TokenMetadata, PaginatedResponse, PaginationParams } from '../../types';

/**
 * Interface for Token Management Service
 * Extends existing token minting with portfolio tracking and metadata management
 */
export interface ITokenService {
  /**
   * Mint a new token (existing functionality)
   */
  mintToken(params: {
    name: string;
    symbol: string;
    decimals: number;
    supply: number;
    description: string;
    imageFile: File;
  }): Promise<string>; // Returns mint address

  /**
   * Get tokens created by a specific wallet
   */
  getTokensByOwner(walletAddress: string, pagination?: PaginationParams): Promise<PaginatedResponse<Token>>;

  /**
   * Get detailed token metadata
   */
  getTokenMetadata(mintAddress: string): Promise<TokenMetadata>;

  /**
   * Update token metadata (if update authority is available)
   */
  updateTokenMetadata(mintAddress: string, metadata: Partial<TokenMetadata>): Promise<boolean>;

  /**
   * Get token balance for a specific wallet
   */
  getTokenBalance(walletAddress: string, mintAddress: string): Promise<number>;

  /**
   * Validate token mint address
   */
  validateTokenMint(mintAddress: string): Promise<boolean>;
}